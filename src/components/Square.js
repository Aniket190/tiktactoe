import React from 'react';



const Square = (prop) => {
    return (
        <button type="button" className="square" onClick={prop.onClick} 
        style={{fontWeight:prop.isWinningSquare? 'bold':'normal'}}>
        {prop.value} 
        </button>
    )
}

export default Square
