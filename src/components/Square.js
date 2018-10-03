import React, {Component} from 'react';

const Square = (props) => {

    function handleClick(event) {
        props.onSquareClick(props.id);
    }

        return(
            <p onClick={handleClick}>{props.id}</p>
        )

}

export default Square;