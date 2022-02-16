import React from "react";
import 'boxicons'
import PropTypes from "prop-types";

function Icon({item}){
    const classes=['bx bxl']
    if(item.type==='contact'){
        classes.push(item.name)
    }
    return(
        <section className='bx'>
         <box-icon type="logo" name={item.name}></box-icon>
        </section>
    )
}
export default Icon
Icon.propTypes={
    item:PropTypes.object.isRequired
}