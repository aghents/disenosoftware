import React, { useState } from "react";
import DatePicker from 'react-date-picker'

function Formulario() {
    const options = [
        {
            label: "Full Day",
            value: "full-day",
        },
        {
            label: "Cueva del Milodón",
            value: "milodon",
        },
        {
            label: "Base Torres",
            value: "basetorres",
        },
    ];
    const [value, onChange] = useState(new Date());
    const [valor, setValue] = useState()
    return (
        <>
            <br></br>
            <div className="container-fluid">
                <form style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <br></br>
                    <label>Nombre y Apellido:
                        <input type="text" />
                    </label>
                    <br></br>
                    <label>Rut:
                        <input type="text" placeholder="11111111-1" />
                    </label>
                    <br></br>
                    <label>Tour:
                        <select>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </label>
                    <br></br>
                    <label>Fecha:
                        <DatePicker onChange={onChange} value={value} />
                    </label>
                    <br></br>
                    <label>E-mail:
                        <input type="email" />
                    </label>
                    <br></br>
                    <label>Teléfono:
                        <input type="text" />
                    </label>
                </form>
            </div>
        </>
    );
}

export default Formulario;
