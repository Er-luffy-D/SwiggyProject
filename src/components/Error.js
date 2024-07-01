import Img from "../../public/Images/error.jpg"
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const er=useRouteError();
    console.log(er);
    return(
        <>
        <div className="error">
        <img src={Img} className="error_img" alt="Not found">
        </img>
        <div className="vert_error">
            <span>N</span>
            <span>O</span>
            <span>T</span>
            <span>F</span>
            <span>O</span>
            <span>U</span>
            <span>N</span>
            <span>D</span>
        </div>
        </div>
        <h2 className="errorMsg">{er.status} : {er.statusText}</h2>
        </>
    )
}
export default Error;