import React from "react";
import { Button } from "flowbite-react";
import { useState } from "react";
import { useEffect } from "react";

import MostrarResultado from "../Resultados/MostrarResultado";
import SYSTEMS from "../../utils/vars/constants";
// import Conversiones from "../../utils/lib/conversiones/conversiones";

export default function ConversionForm(props) {

     // this is the value that will be used in the calculation
     const [value, setValue] = useState(0);
     const [result, setResult] = useState(null);

     // this is important because it will be called when the value changes
     useEffect(() => {
          console.log("value", value);
     }, [value, result]);


     const calculate = () => {
          const value = document.getElementById("value").value;
          const sistemaOrigen = document.getElementById("sistemaOrigen").value;
          const sistemaDestino = document.getElementById("sistemaDestino").value;
          setResult(parseFloat(value, sistemaOrigen).toString(sistemaDestino));
     }

     const validar = (e) => {
          const dominio = SYSTEMS.find(system => system.base == document.getElementById("sistemaOrigen").value).domain.toString();
          if (dominio != undefined) {
               const valor = e.target.value;
               const regex = new RegExp(`^[${dominio}.]+$`);
               if (regex.test(valor)) {
                    setValue(valor);
               } else {
                    e.target.value = valor.slice(0, valor.length - 1);
               }
          }
     }


     return (
          <>
               <div className="flex flex-col overflow-hidden sm:p-10 p-4 border p-4 rounded-lg rounded-lg mt-10">
                    <div className="flex   flex-col sm:flex-row  space-y-4 sm:space-y-0 ">
                         <div className="w-full sm:w-1/2 flex flex-col">
                              <label htmlFor="sistemaOrigen">Sistema origen</label>
                              <select name="" id="sistemaOrigen" className="w-full">
                                   <option value="default" selected>Sistema origen</option>
                                   {SYSTEMS.map((system) => (
                                        <option value={system.base}>{system.name}</option>
                                   ))}
                              </select>

                         </div>
                         <div className="w-full sm:w-1/2 flex flex-col">
                              <label htmlFor="sistemaDestino">Sistema destino</label>
                              <select name="" id="sistemaDestino" className="w-full" required>
                                   <option value="default" selected>Sistema destino</option>
                                   {SYSTEMS.map((system) => (
                                        <option value={system.base}>{system.name}</option>
                                   ))}
                              </select>
                         </div>
                    </div>
                    <div className="flex flex-col mt-4">
                         <label htmlFor="">Valor a convertir</label>
                         <input type="text" placeholder="Enter the number of Pa's or Employees" className="p-2 border-2 border-gray-300 w-full " name="value" id="value" 
                         onChange={(e) => validar(e)} required />

                    </div>
                    <Button className="mt-4" onClick={() => calculate()} >
                         Calculate
                    </Button>
               </div>

               {
                    result != null ?
                         <MostrarResultado title="Resultado" subtitle="Resultado de la conversión" onClick={() => setResult(null)}>
                              <p>{result}</p>
                         </MostrarResultado>
                         : " "

               }
          </>
     );
}