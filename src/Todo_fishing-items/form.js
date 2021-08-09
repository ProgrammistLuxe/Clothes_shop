import React from "react";
import "./form_style.css"
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types'
import Search from '../images/search.png'

function Form(props){
    return(
        <form id="form">
            <input  type="text" name="item" placeholder="Поиск товара"/>
            <img src={Search} onClick={props.onClick}/>
        </form>
    )
}
Form.propTypes={
    onClick:PropTypes.func.isRequired
}

export default Form