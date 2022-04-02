import React from "react";
import '../styles/boton.css'


export default function boton(props) {

    const isOperator = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return (
        /** EN ONCLICK () => ES PARA QUE EL DIV DIGA QUE SE TIENE QUE LLAMAR ALA FUNCION */
        <div onClick={() => props.manipuleClick(props.children)} className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
            {props.children}
        </div>
    )
}