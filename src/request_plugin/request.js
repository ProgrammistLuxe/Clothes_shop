import React from  'react'
import PropTypes, {func} from 'prop-types'
import data from "bootstrap/js/src/dom/data";
  function Request(method,api,body=null){
      let data;
     return fetch(api,{method:method})
        .then(response=>{
            if(response.ok){
            return response.json()
            }
            else {
                return response.json().then(error=>{
                    const  e= new Error('Что-то пошло не так')
                    e.data=error
                    throw e
                })
            }
        })

}



export default Request

