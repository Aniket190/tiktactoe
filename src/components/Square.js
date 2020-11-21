import React from 'react';



const Square = (prop) => {
    return (
        <button type="button" className="square" onClick={prop.onClick}>
            {prop.value} 
        </button>
    )
}

export default Square
