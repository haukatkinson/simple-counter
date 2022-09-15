//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// import { ProgressPlugin } from "webpack";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

function SimpleCounter(props){
    return <div className="bigCounter bg-dark text-light w-50 p-3 d-flex justify-content-center mx-auto">
        <div className="clock">
        <i class="far fa-clock"></i>
        </div>
        <div className="digitFour">{props.digitFour % 10}</div>
        <div className="digitThree">{props.digitThree % 10}</div>
        <div className="digitTwo">{props.digitTwo % 10}</div>
        <div className="digitOne">{props.digitOne % 10}</div>
    </div>
}
SimpleCounter.protoTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
}

let counter = 0
setInterval(function(){
    const four = Math.floor(counter/1000)
    const three = Math.floor(counter/100)
    const two =  Math.floor(counter/10)
    const one = Math.floor(counter/1)
    counter++;
    ReactDOM.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>,
        document.querySelector("#app")
    ) 
},1000)
    






