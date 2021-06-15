const InputsWithoutTax = (props) => {
    return (
        <div>
            <input className="inputField" type="number" name="units" onChange={props.handleChange} placeholder="cantidad de unidades" />
            <input className="inputField" type="number" name="lotPrice" onChange={props.handleChange} placeholder="precio del lote" />
            <input className="inputField" type="number" name="gain" onChange={props.handleChange} placeholder="porcentaje de ganancia deseado" /><br />
            <button className="submit-btn" onClick={props.calculateCosts}>Calcular costos</button><br /><br />
            <span>El precio por unidad es de: {props.cost}</span><br />
            <span>El precio recomendado de venta es de: {props.recomendedPrice}</span>
        </div>
    )
}

export default InputsWithoutTax;