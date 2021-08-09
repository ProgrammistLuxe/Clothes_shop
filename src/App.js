import React, {useState, UseEffect, useEffect} from 'react'
import Request from "./request_plagin/request";
import "./images/lake.jpg"
import Add from './Todo_fishing-items/add'
import Icon from './images/store_icon.png'
import Stone from  './images/грузик.jpg'
import Collapse from "bootstrap/js/src/collapse";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Menu from './Todo_menu/menu'
import './images/загружено.png'
import Fishing_items from './Todo_fishing-items/fishing-items'
import Footer from "./Todo_menu/Footer";
import './App.css'
import Form from "./Todo_fishing-items/form";
import PropTypes, {element} from 'prop-types'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

import Menu_item from "./Todo_fishing-items/menu_item";

const styles={
    wrapper:{
        position:"absolute",
        width:'100%',
        height:'100%',
        margin:0,
        padding:0

    }
}

function App(){
    const url="https://jsonplaceholder.typicode.com/users"
    const [items,setItems]=useState([
       ])
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        Request("GET",url)
            .then(todos=>{
                setLoading(true)
                let items_array=[]
                todos.forEach(todo=>{

                    let item={
                        id:todo.id,
                        name:todo.name,
                        username:todo.username,
                        city:todo.address.city,
                        street:todo.address.street,
                        completed:false
                    }
                    items_array.push(item)
                })



                setItems(items_array)
            })
    },[])
    function save() {
        const new_items = [];
        console.log('easy')
        for (let i = 0; i < items.length; i++) {

            new_items.push(items[i]);

        }

        return [...new_items];

    }


     function searchItem(e){
         const mass=save()
        let undefined_block=document.getElementById("undefined")
        let menu_item=document.getElementById("menu_item")
        e.preventDefault();
         let input=document.querySelector('input')
         let user_item=input.value;
         if(user_item!=="" && items.length>0){
             let found=0;
             items.forEach(item=>{
                found++
                 if(item.name===user_item){
                    found=0

                     setItems(
                         items.filter(item=>item.name===user_item)
                     )
                 }
                else if(found===items.length) {
                     undefined_block.style.display="block";
                     setItems(
                         items.filter(item=>item.name===user_item)
                     )

                 }
             })

         }
         else {
             undefined_block.style.display="block";
             setItems(mass)

         }
    }
    function Delete_item(id){

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
        let user_photo=Stone;
        const user_item={
            id:user_id,
            completed:user_completed,
            title:user_title,
            photo:user_photo
        }
        items.push(user_item)
         setItems([...items])
        }

    return(
        < section className="wrapper"  style={styles.wrapper}>
                <section id="store_icon"><img src={Icon}/></section>

                <Form onClick={searchItem}/>
                <Fishing_items items={items}/>
            <footer id="footer">
                <Footer/>
            </footer>


        </section>
    )

}
/*id:1,completed:false,title:'спининг',photo:Spn},
{id:2,completed:false,title:'поплавок',photo:Float},
{id:3,completed:false,title:'фидер',photo:Fdr},
{id:4,completed:false,title:'крючки',photo:Hook},
{id:5,completed:false,title:'наживка',photo:Bait},
{id:6,completed:false,title:'садок',photo:Cage},*/
export default App;




