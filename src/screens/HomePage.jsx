import React, { Component } from 'react'
import ValidatorForm from '../components/ValidatorForm'

export class HomePage extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row p-4'>
                    <div className="col">
                        <h1 className='text-center'>Form Validator</h1>
                        <ValidatorForm/>
                    </div>
                </div>

                <div class="footer-copyright text-center">
                    Fathul Qorib A | 2019
                </div>
            </div>
        )
    }
}

export default HomePage

