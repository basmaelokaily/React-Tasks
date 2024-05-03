import marblecaves from './assets/marblecaves.jpg'
import {FcLike, FcComments} from "C:/Users/LENOVO/node_modules/react-icons/fc"
import {AiFillEye} from "C:/Users/LENOVO/node_modules/react-icons/ai"


function Card(){
    return(
        <div className="card">
            <img className="bridge" src={marblecaves} alt="this an image that contains Asian food" width={700}></img>
            <div className='header'>
                <div className="dateheader">May 2<sup>nd</sup>, 2024</div>
                <div className="header1">
                    <h2>Greetings from the breathtaking Marble Caves of Chile! </h2>
                    <p><i>Marble Caves promise an unforgettable journey into the heart of Chile's majestic landscapes</i></p>
                </div>
                <hr/>
                <div className='icons'>
                    <p><sup>0</sup><AiFillEye size={20}/><sup>0</sup><FcComments  size={20}/><sup>6</sup><FcLike  size={20}/></p>
                </div>
            </div>
        </div>
    );
}
export default Card

