import React from 'react'

function Schedule({item,key}){
    return(
        <section>
            <p>{item.lessonType}</p>
<p>{item.subject}</p>
<p>{item.startLessonTime} - {item.endLessonTime}</p>
<p>{item.employee.map(emp=>{
    return emp.fio
})}</p>
        </section>
    )
}
export default Schedule