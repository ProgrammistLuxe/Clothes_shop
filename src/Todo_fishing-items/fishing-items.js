import React from 'react';
import './fishing-items_style.css'
import Menu_item from "./menu_item";
import PropTypes from 'prop-types'

function Fishing_items(props){
    return(
        <section id="items">
            {props.items.map(item=>{
                return <Menu_item item={item} key={item.id} onClick={props.Delete} />
            })}
            <section id="undefined">Ничего не найдено</section>
        </section>
    )
}
Fishing_items.propTypes={
    items:PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Fishing_items