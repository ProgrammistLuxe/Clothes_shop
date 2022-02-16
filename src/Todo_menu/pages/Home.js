import React from 'react'
import './Home.css'
import Schedule from './schedule';
function  Home({item,key}){
    return(
        <section id="wrapper">
            <p>{item.weekDay}</p>

            <div>{item.schedule.map(sub => {
                return <Schedule item={sub} key={sub.id}/>
            })}</div> 
          
        </section>
    )
}
export default Home;