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
            <form>
                <label>Nombre y Apellido:
                    <input type="text" />
                </label>
                <label>Rut:
                    <input type="text" placeholder="11111111-1" />
                </label>
                <label>Tour:
                    <select>
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </label>
                <label>Fecha:
                    <DatePicker onChange={onChange} value={value} />
                </label>
                <label>E-mail:
                    <input type="email" />
                </label>
                <label>Teléfono:
                    <input type="text" />
                </label>
            </form>
        </>
    );
}

export default Formulario;
