import React, {useState,useRef, useEffect,useCallback} from 'react'
import 'boxicons'
import Main from './Main';
import About from './Todo_menu/pages/About';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

function App(){
    return(
        <Router>
        <section>
                        <h1><Link to="/about"> Экзамены</Link></h1>
                        <Switch>
                            <Route exact path="/" component={Main}/>
                            <Route exact path="/about" component={About}/>
                        </Switch>
             
        </section>
        </Router>
    )

}


export default App;


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

