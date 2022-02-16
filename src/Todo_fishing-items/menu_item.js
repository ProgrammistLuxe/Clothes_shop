import React from 'react'
import './menu_iten-style.css'

import PropTypes from 'prop-types'
import CloseButton from "react-bootstrap/Button";

function Menu_item({item,onClick,}) {
    const classes = ['item_text']
    if(item.title==='средства ухода'){
classes.push('long')
    }
    return (
        <section id="menu_item">
            <img className="list_image" src={item.photo}/>
           <section className={classes.join(' ')}>{item.title}</section>
            </section>

    )
}


export default Menu_item;
Menu_item.propTypes={
    item:PropTypes.object.isRequired,
    address:PropTypes.object.isRequired

}

/* <button onClick={()=>{onClick(item.id)}} className="close" src={Button_close} width="30px" height="30px"></button>*/