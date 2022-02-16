import React, {useState,useRef, useEffect,useCallback} from 'react'
import 'boxicons'
import Add from './Todo_fishing-items/add'
import Search from "./selection/search_city";
import Icon from './images/store_icon.png'
import Basket from './images/корзина.png'
import Clothes from './images/одежда.png'
import Sneakers from './images/обувь.png'
import New from './images/новинки.png'
import Sport from './images/спорт.png'
import Premium from './images/премиум.png'
import Sets from './images/комплекты.png'
import Children from './images/детская.png'
import Beauty from './images/красота.png'
import Care_products from './images/средства ухода.png'
import Brands from './images/бренды.png'
import Sale from  './images/акции.png'
import Accessories from  './images/аксессуары.png'
import Collapse from "bootstrap/js/src/collapse";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Fishing_items from './Todo_fishing-items/fishing-items'
import Footer from "./Todo_menu/Footer";
import './App.css'
import Form from "./Todo_fishing-items/form";
import PropTypes, {element} from 'prop-types'

const styles={
    wrapper:{
        position:"absolute",
        width:'100%',
        height:'100%',
        minHeight:'100%',
        display:'flex',
        flexDirection:'column',
        margin:0,
        padding:0

    }
}

function Main(){
    const url="https://jsonplaceholder.typicode.com/users"

    const [items,setItems]=useState([
{id:1,completed:false,title:'новинки',photo:New},
{id:2,completed:false,title:'премиум',photo:Premium},
{id:3,completed:false,title:'акции',photo:Sale},
{id:4,completed:false,title:'бренды',photo:Brands},
{id:5,completed:false,title:'одежда',photo:Clothes},
{id:6,completed:false,title:'обувь',photo:Sneakers},
{id:7,completed:false,title:'аксессуары',photo:Accessories},
{id:8,completed:false,title:'детская',photo:Children},
{id:9,completed:false,title:'спорт',photo:Sport},
{id:10,completed:false,title:'комплекты',photo:Sets},
{id:11,completed:false,title:'красота',photo:Beauty},
{id:12,completed:false,title:'средства ухода',photo:Care_products}]
    )

    const [cities,setCities]=useState([
        {id:1,completed:false,title:'Брест'},
        {id:2,completed:false,title:'Витебск'},
        {id:3,completed:false,title:'Гомель'},
        {id:4,completed:false,title:'Гродно'},
        {id:5,completed:false,title:'Могилев'},
        {id:6,completed:false,title:'Минск'}]
    )
     function searchItem(){
        let undefined_block=document.getElementById("undefined")
         console.log(undefined_block)
        let menu_item=document.getElementById("menu_item")
         let input=document.querySelector('input')
         let user_item=input.value;
         if(user_item!=="" && items.length>0){
             let found=0;
             items.forEach(item=>{
                found++
                 if(item.title===user_item){
                    found=0

                     setItems(
                         items.filter(item=>item.title===user_item)
                     )

                 }
                else if(found===items.length) {
                     undefined_block.style.display="block";
                     setItems(
                         items.filter(item=>item.title===user_item)
                     )

                 }
             })

         }
         else {

             undefined_block.style.display="block";
         }
    }
   /* function Hide(){
        let select=document.getElementById("select")
        let select_body=document.getElementById("select_body")
        window.addEventListener("click",event=>{
            if(event.target!=select){
                select_body.style.display="none"
            }

        })
    }

    Hide()*/
    function show(){
        let select_body=document.getElementById("select_body")
        if( select_body.style.display==="block"){
        select_body.style.display="none"
    }
    else{
        select_body.style.display="block"
    }
}

    function Active_item(id){
        let select_header_content=document.getElementById("select_header_content")
        cities.forEach(city=>{
            if(city.id===id){
                select_header_content.innerHTML=city.title
            }
        })
    }

    return(
        <section className="row">
            <section className="col-lg-12 col-md-12 col-sm-12 col-12">
                <section className="wrapper"  style={styles.wrapper}>
                   <section id="store_icon"><img src={Icon}/></section>

                    <section id="search_field">
                        <section className="search_field_image">
                        <img src={Basket} className="search_field_image"/>
                        </section>
                        <Search cities={cities} onToggle={show} choose={Active_item}/>
                   </section>
                  <Form onClick={searchItem}/>
                   <Fishing_items items={items}/>
                   <Footer/>
                 
               </section>
            </section>
        </section>
        
    )

}


export default Main;


/*  function Delete_item(id){

        items.map(item=>{
            if(item.id===id){
             item.completed=!item.completed


            }
        })
        setItems(
            items.filter(item=> item.completed===false)
        )
        }

        async function Add_item(){

        let user_id
            if(items.length>0){
        user_id=items[items.length-1].id+1;
            }
            else{
                user_id=1;
            }
        let user_completed=false;
        let user_title="грузик";
        const user_item={
            id:user_id,
            completed:user_completed,
            title:user_title,
        }
        items.push(user_item)
         setItems([...items])
        }
*/

