import React from 'react'
import PropTypes from "prop-types";
function Pay({item}){
    return(
        <section id="pay">
                <img src={item.photo}/>
        </section>
    )
}
export default Pay
Pay.propTypes={
    item:PropTypes.object.isRequired
}