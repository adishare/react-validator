# Assessment Test

## Case 1

> React Input Validator
------

````
yarn install
yarn start
````

## Case 2

> What is High order component in React Js? Please give us example component in react
project that use that concept?
------

higher-order component is a function that takes a component and returns a new component, is an advanced technique in React for reusing component logic.
HOCs are common in third-party React libraries, such as Redux’s connect and compose

## Case 2

> Please make a function to check a character that is paired with each other, and if you find a character that is not paired then it is errors.
For example “(())” are valid, “(()(“ are not valid. you can create variable as array or strings, it is flexible.
------

```
function checkAllPaired(string) {
    let characters = string.split('')
    let notPairedChar = new Set()

    characters.forEach(char => notPairedChar.delete(char) || notPairedChar.add(char) )

    return notPairedChar.values().next().value === undefined
}
```

Run Test  : 
```
node case3.js
```