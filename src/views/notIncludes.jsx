import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import InputsForTax from '../components/inputsForTax';

class NotIncludes extends React.Component {
    constructor() {
        super()
        this.state = {
            total: 0,
            subTotal: 0,
            tax: 0,
            units: 0,
            lotPrice: 0,
            gain: 0,
            unitCost: 0,
            recomendedPrice: 0,
        }
    }

    handleChange = (inputs) => {
        switch (inputs.target.name) {
            case ("total"):
                this.setState({ total: inputs.target.value })
                break;
            case ("subTotal"):
                this.setState({ subTotal: inputs.target.value })
                break;
            case ("units"):
                this.setState({ units: inputs.target.value })
                break;
            case ("lotPrice"):
                this.setState({ lotPrice: inputs.target.value })                
                break;
            case ("gain"):
                this.setState({ gain: inputs.target.value })
                break;
            default:
                break;
        }
        
    }

    calculateTax = () => {
        if(this.state.total === 0 || this.state.subTotal === 0){
            this.setState({errorMsj: "debe completar todos los datos"})
        }else if(this.state.subTotal > this.state.total){
            this.setState({errorMsj: "el subtotal no puede ser mayor al total"})
        }else{
            this.setState({errorMsj: ""});
        let thisTax = this.state.total / this.state.subTotal;
        thisTax = thisTax.toFixed(2)
        this.setState({ tax: thisTax })
        thisTax = 0
        console.log(this.state.total)
        }
    }

    calculateCosts = () => {        
        if (this.state.units === 0 || this.state.lotPrice === 0 || this.state.gain === 0) {
            this.setState({ errorMsj: "debe completar todos los campos" });
        }else{
            this.setState({errorMsj: ""});
            let cost = this.state.lotPrice / this.state.units * this.state.tax;
            
            this.setState({ unitCost: cost });
            let recomendedPrice = cost + (cost * this.state.gain / 100);
            this.setState({ recomendedPrice: recomendedPrice });
            return
        }
    }

    render() {
        return (
            <div className="tittle">
                <h1 >Calculo de boleta sin impuestos incluidos</h1>
                <Link to="/">
                    <button className="home-btn">Home</button>
                </Link>
                <InputsForTax
                    handleChange={this.handleChange}
                    calculateTax={this.calculateTax}
                    tax={this.state.tax}
                    calculateCosts={this.calculateCosts}
                    cost={this.state.unitCost}
                    recomendedPrice={this.state.recomendedPrice}
                />
                <h3 className="error-msj">{this.state.errorMsj}</h3>
            </div>
        )
    }
}

export default NotIncludes;