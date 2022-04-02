import React from "react";
import '../styles/buttonClear.css'

const buttonClear = (props) => {
    return (
        <div onClick={props.clear} className='button-clear'>
            {props.children}
        </div>
    );
}
export default buttonClear;