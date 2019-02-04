import React, { Component } from 'react'
import InputText from './InputText'

export default class ValidatorForm extends Component {

    state = {
        type : 'person',
        first_name : '',
        last_name : '',
        email : '',
        company_name : '',
        phone : ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    isNotEmpty = () => {
        let { type, first_name, last_name, email, company_name, phone } = this.state
        
        if(type === 'person') 
            return (first_name.length > 0 && last_name.length > 0 && email.length > 0)
        else 
            return (company_name.length > 0 && phone.length > 0)
    }

    isValidEmail = (email = this.state.email) => {
        // contain exactly one @ character. Moreover, both parts (before and after the @)
        // should consist of at least one and at most 64 characters comprising only letters,
        // digits and /or dots (a-z, A-Z, 0-9, .)

        let firstAtIndex = email.indexOf('@')
        let afterAt =  email.slice(firstAtIndex + 1)
        let beforeAt = email.slice(0, firstAtIndex)
        let regex = /^[A-Za-z0-9.]+$/
        
        if(email.length < 3 || firstAtIndex < 1 || afterAt.includes('@') || beforeAt.length > 64 || afterAt > 64 || !regex.test(beforeAt) || !regex.test(afterAt)) return false
    
        return true
    }

    isValidPhoneNumber = (phoneNumber = this.state.phone) => {
        // consist of digits, dashes (-) and spaces only. It should have at least 6 digits

        let regex = /^[0-9\-\s]+$/
        let numbersInPhoneNumberCount = phoneNumber.replace(/-|\s/g,'').length

        if(!regex.test(phoneNumber) || numbersInPhoneNumberCount < 6) return false

        return true
    }

    validateInput = () => {
        if(this.state.type === 'person') 
            return this.isNotEmpty() && this.isValidEmail()
        else 
            return this.isNotEmpty() && this.isValidPhoneNumber()
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.validateInput() ? alert('Success') : alert('Error')
    }

    render() {
        return (
            <div className='container'>
                <div className="row py-4">
                
                    <div className="col-6">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className='row my-1'>
                                    <label className='col-2'>Type : </label>
                                    <div className='col-3'>
                                        <label className='radio-inline'>
                                            <input type="radio" value='person' name='type' id='type'
                                                checked={this.state.type === 'person'}
                                                onChange={this.handleChange} /> Person
                                        </label>
                                    </div>
                                    <div className='col-3'>
                                        <label className='radio-inline'>
                                            <input type="radio" value='company' name='type' id='type'
                                                checked={this.state.type === 'company'}
                                                onChange={this.handleChange} /> Company
                                        </label>
                                    </div>
                                </div>

                                {this.state.type === 'person' 
                                    ?
                                    <>
                                        <InputText label={'First Name'} placeholder={'John'} id={'first_name'} value={this.state.first_name} handleChange={this.handleChange} />
                                        <InputText label={'Last Name'} placeholder={'Doe'} id={'last_name'} value={this.state.last_name} handleChange={this.handleChange} />
                                        <InputText label={'Email'} placeholder={'john@do.e'} id={'email'} value={this.state.email} handleChange={this.handleChange} />
                                    </>
                                    :
                                    <>
                                        <InputText label={'Company Name'} placeholder={'google'} id={'company_name'} value={this.state.company_name} handleChange={this.handleChange} />
                                        <InputText label={'Phone'} placeholder={'324-343-3332'} id={'phone'} value={this.state.phone} handleChange={this.handleChange} />
                                    </>
                                }
                                
                                <button type="submit" className="btn btn-info btn-block mt-3" >Next</button>
                            </div> 
                        </form>
                    </div>

                    <div className="col-6">
                        <ul className="list-group">
                            {!this.isNotEmpty() && <li className="list-group-item bg-danger">No Empty Input</li> }
                            {!this.isValidEmail() && this.state.type === 'person' && <li className="list-group-item bg-danger">Valid Email</li> }
                            {!this.isValidPhoneNumber() && this.state.type === 'company' && <li className="list-group-item bg-danger">Valid Phone Number</li> }
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
