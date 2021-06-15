import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import InputsWithTax from '../components/inputsWithTax'

class IncludesTax extends React.Component {
    constructor() {
        super()
        this.state = {
            units: 0,
            lotPrice: 0,
            gain: 0,
            unitCost: 0,
            recomendedPrice: 0,
            errorMsj: "",
        }
    }
    handleChange = (inputs) => {
        switch (inputs.target.name) {
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

    calculateCosts = () => {
        if (this.state.units === 0 || this.state.lotPrice === 0 || this.state.gain === 0) {
            this.setState({ errorMsj: "debe completar todos los campos" });
        } else {
            let cost = this.state.lotPrice / this.state.units;
            this.setState({ unitCost: cost });
            let recomendedPrice = (cost * this.state.gain / 100) + cost;
            this.setState({ recomendedPrice: recomendedPrice });
        }
    }
    render() {
        return (
            <div className="tittle">
                <h1>Esta boleta incluye impuestos</h1>

                <Link to="/">
                    <button className="home-btn">Home</button>
                </Link>
                <InputsWithTax
                    handleChange={ this.handleChange }
                    calculateCosts={ this.calculateCosts }
                    cost={ this.state.unitCost }
                    recomendedPrice={ this.state.recomendedPrice } />
                <h3 className="error-msj">{ this.state.errorMsj }</h3>
            </div>
        )
    }
}

export default IncludesTax;