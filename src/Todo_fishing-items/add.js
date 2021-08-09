import React from "react";
import './add_style.css'
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types'
function Add(props){
    return(
        <section id="add_item">
            <Button onClick={props.onToggle} variant="success">добавить</Button>{' '}
        </section>
    )
}

export default Add
Add.propTypes={
    onClick:PropTypes.func.isRequired
}