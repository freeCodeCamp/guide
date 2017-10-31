---
title: Functional Components
---
## Functional Components

React functional components, also called stateless components, are, as the name suggests, react components that act as functions rather than classes. They do not allow the user to store object state, and are typically much simpler than stateful components.

As a result, they are more performant, with some users reporting 40% performance improvements. They are also used along with application architectures like redux to help reduce code complexity and improve maintainability.  
    

`
const MyFunctionalComponent = (props) => {
    
    const { prop1, prop2 } = props
    
    return(
        <div className='wrapper'>
            <p>About Our Team</p>
            <p>Person 1: {prop1.name}</p>
            <p>Person 2: {prop2.name}</p>
        </div>
    )
}

export default MyFunctionalComponent 
`

#### More Information:
https://medium.com/missive-app/45-faster-react-functional-components-now-3509a668e69f
