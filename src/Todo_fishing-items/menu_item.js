import React from 'react'
import './menu_iten-style.css'
import Button_close from '../images/button.png'
import '../images/загружено.png'
import PropTypes from 'prop-types'
import CloseButton from "react-bootstrap/Button";
function Menu_item({item,onClick,}) {
    return (
        <section id="menu_item">
            <section className="item_header">
            {item.name}
            </section>
            <section className="item_image">
                <p> логин:{item.username}</p>
                <p> город:{item.city}</p>
                <p> улица:{item.street}</p>
            </section>
        </section>
    )
}


export default Menu_item;
Menu_item.propTypes={
    item:PropTypes.object.isRequired,
    address:PropTypes.object.isRequired

}

/* <button onClick={()=>{onClick(item.id)}} className="close" src={Button_close} width="30px" height="30px"></button>*/