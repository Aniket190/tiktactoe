import React from 'react'

export const StatusMessage = ({winner,current}) => {

    // const message =winner? `Winner is ${winner}`:`Next player is ${current.isXNext ? 'X' : 'O'}`;

    const noMovesLeft = current.board.every((el)=> el !==null)
    
    return (
        <div>
            <h2>{
                winner && `Winner is ${winner}`
                }
                {
                !winner && !noMovesLeft && `Next player is ${current.isXNext ? 'X' : 'O'}`    
                }
                {
                !winner && noMovesLeft && `DRAW`        
                }
                </h2>
        </div>
    )
}
export default StatusMessage;