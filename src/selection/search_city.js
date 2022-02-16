import React  from "react";
import Choose from '../images/choose.png'
import Option from "./option";
import './search_city_style.css'
import PropTypes, {object} from 'prop-types'

function Search(props){

    return(
        <section id="select">
           <section id="select_header">
               <p id="select_header_content">Выберите город</p>
               <section id="img_section">
               <img id="choose" src={Choose} max-width="12" max-height="13" onClick={props.onToggle}/>
               </section>
           </section>
            <section id="select_body">
                {props.cities.map(city=>{
                    return <Option item={city} key={city.id}  onClick={props.choose}/>
                })}
            </section>
        </section>
    )
}

Search.propTypes={
    cities:PropTypes.arrayOf(PropTypes.object).isRequired
}
export default Search