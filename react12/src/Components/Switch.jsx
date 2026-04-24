import React from 'react'

const Switch = () => {
    const option = 'b';
    switch(option){
        case 'a':
            return <h1>Case A</h1>
        case 'b':
            return <h1>Case B</h1>
        default:
            return <h1>Default Case</h1>
    }
 
}

export default Switch
