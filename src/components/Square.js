import React from 'react';



const Square = (prop) => {
    return (
        <button type="button"  onClick={prop.onClick} 
         className={`square ${prop.isWinningSquare ? 'winning': ' '} 
        ${prop.value=== 'X'?' text-green':'text-orange'}`
        }
         >
        {prop.value} 
        </button>
    )
}

export default Square
