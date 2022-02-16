import React from 'react'
import './option_style.css'
import PropTypes from 'prop-types'

function Option({item,key,onClick}){

    return(
        <section className="option" onClick={()=>{onClick(item.id)}} >
            {item.title}
        </section>
    )
}

Option.propTypes={
    item:PropTypes.object.isRequired,
    onClick:PropTypes.func.isRequired
}
export  default Option