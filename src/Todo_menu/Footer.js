import React, {useState} from "react";
import './Footer.css'
import Apple from '../images/apple.png'
import Visa from  '../images/visa.png'
import Samsung from '../images/samsung.png'
import Contacts from "./Footer_elements/contants";

function Footer(){
    const[contacts,setContacts]=useState([
        {id:1,name:'instagram',type:'contact'},
        {id:2,name:'vk',type:'contact'},
        {id:3,name:'facebook',type:'contact'},
        {id:4,name:'mail-send',type:'contact'},
        {id:5,name:'apple',type:'pay',photo: Apple},
        {id:6,name:'visa',type:'pay', photo: Visa},
        {id:7,name:'samsung',type:'pay', photo: Samsung},
    ])
    return(
        <section id="footer">
            <section className="questions">
               <h4> Часто задаваемые вопросы</h4>
                <ul>
                    <li>Как вернуть товар?</li>
                    <li>Как подобрать размер?</li>
                    <li>Как оформить заказ?</li>
                </ul>
            </section>

              <Contacts items={contacts}/>

            <section className="info">
               <h4>О нас</h4>
                <p>Крупнейший онлайн магазин на территории СНГ.
                    Мы работаем быстро и качественно.</p>
            </section>
        </section>
    )
}
export default Footer
