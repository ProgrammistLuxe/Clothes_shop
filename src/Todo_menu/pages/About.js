import React, {useEffect,useState} from 'react'
import Request from "../../request_plugin/request";
import Home from "./Home";
import "./About.css"


function About(){
    let api="https://journal.bsuir.by/api/v1/studentGroup/schedule?studentGroup=120601"
    let [data,setData]=React.useState([]);
    let [state,setState]=React.useState(false)
    useEffect(()=>{
        Request("get",api).then(data=>{
            setData(data);
            setState(true)
        });
    },[])
 
    return(
        <section id="page">
            {state&&
            <div>
            <h1>{data.studentGroup.name},курс {data.studentGroup.course}</h1>
            <p>{data.todayDate}</p>
            <div>{data.examSchedules.map(schedule=>{
                return <Home item={schedule} key={schedule.id}/>

            })}</div>
            </div>
            }
        </section>
    )
}
export default About