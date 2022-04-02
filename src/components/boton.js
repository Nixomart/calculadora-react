import React from "react";
import '../styles/boton.css'


export default function boton(props) {

    const isOperator = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    }
    return (
        <div className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
            {props.children}
        </div>
    )
}