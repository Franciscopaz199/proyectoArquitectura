import React from "react";
import { Button } from "flowbite-react";
import { useState } from "react";
import { useEffect } from "react";
import FormContainer from "./LayoutsForm/FormContainer";

import Conversiones from "../../utils/lib/conversiones/conversiones";
import MostrarResultado from "../Resultados/MostrarResultado";
import SYSTEMS from "../../utils/vars/constants";

// import Conversiones from "../../utils/lib/conversiones/conversiones";

export default function ConversionForm(props) {

     // this is the value that will be used in the calculation
     const [value, setValue] = useState(0);
     const [result, setResult] = useState(null);
     const [sistemaDestino, setSistemaDestino] = useState(0);

     // this is important because it will be called when the value changes
     useEffect(() => {
          console.log("value", value);
     }, [value, result, sistemaDestino]);


     const scrollIntoView = () => {
          const resultadoDiv = document.getElementById("resultado");
          resultadoDiv.scrollIntoView({ behavior: "smooth" });
     }

     const calculate = () => {
          const sistemaOrigen = document.getElementById("sistemaOrigen").value;
          const sistemaDestino = document.getElementById("sistemaDestino").value;
          setSistemaDestino(sistemaDestino);
          if (sistemaOrigen == "default" || sistemaDestino == "default") {
               alert("Debe seleccionar un sistema origen y un sistema destino");
               return;
          }

          const conversion = new Conversiones(value, sistemaOrigen, sistemaDestino);
          const resultado = conversion.convertirSistema();
          setResult(resultado);
     }



     const validar = (e) => {
          const dominio = SYSTEMS.find(system => system.base == document.getElementById("sistemaOrigen").value).domain.toString();
          if (dominio != undefined) {
               const valor = e.target.value;
               const regex = new RegExp(`^[${dominio}.]+$`);
               if (regex.test(valor)) {
                    setResult(null);
                    setValue(valor);

               } else {
                    e.target.value = valor.slice(0, valor.length - 1);
               }
          }
     }


     return (
          <>
               <FormContainer>

                    <div className="flex   flex-col sm:flex-row  space-y-4 sm:space-y-0 ">
                         <div className="w-full sm:w-1/2 flex flex-col">
                              <label htmlFor="sistemaOrigen">Sistema origen</label>
                              <select name="" id="sistemaOrigen" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-40">
                                   {SYSTEMS.map((system) => (
                                        <option value={system.base}>{system.name}</option>
                                   ))}
                              </select>
                         </div>
                         <div className="w-full sm:w-1/2 flex flex-col">
                              <label htmlFor="sistemaDestino">Sistema destino</label>
                              <select name="" id="sistemaDestino" className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-40" required>
                                   <option value="default" selected>Sistema destino</option>
                                   {SYSTEMS.map((system) => (
                                        <option value={system.base}>{system.name}</option>
                                   ))}
                              </select>
                         </div>
                    </div>
                    <div className="flex flex-col mt-4">
                         <label htmlFor="">Valor a convertir</label>
                         <input type="text" placeholder="Ingresa el valor a convertir" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm bg-gray-50 focus:border-yellow-500 focus:ring-yellow-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" name="value" id="value"
                              onKeyUp={(e) => validar(e)} />

                    </div>
                    <div className="flex ">
                         <Button onClick={() => calculate()}
                              className="w-1/3mx-auto mt-4">
                              Calcular
                         </Button>
                    </div>


               </FormContainer>
               {
                    result != null ?
                         <MostrarResultado
                              title="Resultado"
                              subtitle="Resultado de la conversión"
                              onClick={() => setResult(null)}
                              scrollIntoView={scrollIntoView}
                              latex1={`$${value}_{{${document.getElementById("sistemaOrigen").value}}} = $`}
                              latex2={` $${result}_{{${sistemaDestino}}}$`}
                         >

                         </MostrarResultado>
                         : " "

               }
          </>
     );
}