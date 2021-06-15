/*aqui insertar router*/
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Button = (props) => {
    return (        
            <div className="buttons">
                <Link to="/includes"><button>Calculo de boleta CON Impuestos</button></Link>
                <Link to="/notincludes"><button>Calculo de boleta SIN Impuestos</button></Link>
            </div>
    )
}

export default Button;