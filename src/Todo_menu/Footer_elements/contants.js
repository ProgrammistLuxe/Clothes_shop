import React from 'react'
import './contacts.css'
import Icon from './icon'
import Pay from './pay'
import PropTypes, {arrayOf} from "prop-types";

function Contacts(props){
    return(
        <section id="contacts">
            {!!props.items.length &&(
            <section>
            <h4>
                Доступные средства оплаты
            </h4>
                <section className="pay">
            {props.items.map(item=> {
                if(item.type==='pay') {
                    return <Pay key={item.id} item={item} className="item"/>
                }
            })}
                </section>

            </section>
            )}
            <section className="contacts">
            <h3>Контакты</h3>
                <section className="pay">
            {props.items.map(item=> {
                if(item.type==='contact') {
                    return <Icon key={item.id} item={item}/>
                }
            })}
                </section>
            </section>
        </section>
    )
}
export default Contacts
Contacts.propTypes={
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}