import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { Button } from "flowbite-react";
import FormContainer from "./LayoutsForm/FormContainer";
import InputForm from "./FormsComponents/InputForm";

import SYSTEMS from "../../utils/vars/constants";
import Conversiones from "../../utils/lib/conversiones/conversiones";
import Funciones from "../../utils/lib/conversiones/Funciones";

export default function AritmeticaForm(props) {

     const [numero1, setNumero1] = useState({
          value: "",
          system: ""
     });
     const [numero2, setNumero2] = useState({
          value: "",
          system: ""
     });

     const [resultados, setResultados] = useState([]);

     useEffect(() => {

     }, [numero1, numero2]);

     const calcular = () => {
          const operacion = document.getElementById("operacion").value;
          if (operacion == "default") {
               alert("Debe seleccionar una operación");
               return;
          }
          const val1 = new Conversiones(numero1.value, numero1.sistema, 10);
          const val2 = new Conversiones(numero2.value, numero2.sistema, 10);


          const resultados = [];

          switch (operacion) {
               case "suma":
                    SYSTEMS.forEach(system => {
                         resultados.push({
                              value: new Funciones().sistemaBase(val1.convertirDecimal() + val2.convertirDecimal(), system.base),
                              system: system.base
                         });
                    });
                  
                    break;
               case "resta":

                    SYSTEMS.forEach(system => {
                         resultados.push({
                              value: new Funciones().sistemaBase(val1.convertirDecimal() - val2.convertirDecimal(), system.base),
                              system: system.base
                         });

                    });


                    break;
               case "multiplicacion":

                    SYSTEMS.forEach(system => {
                         resultados.push({
                              value: new Funciones().sistemaBase(val1.convertirDecimal() * val2.convertirDecimal(), system.base),
                              system: system.base
                         });
                    }
                    );


                    break;
               case "division":

                    SYSTEMS.forEach(system => {
                         resultados.push({
                              value: new Funciones().sistemaBase(val1.convertirDecimal() / val2.convertirDecimal(), system.base),
                              system: system.base
                         });
                    }
                    );

                    break;
          }
          setResultados(resultados);
     }

     return (
          <>
               <FormContainer>
                    <div className="flex flex-col">
                         <label htmlFor="">
                              seleccione una operación
                         </label>
                         <select class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" name="operacion" id="operacion">
                              <option value="suma">Suma</option>
                              <option value="resta">Resta</option>
                              <option value="multiplicacion">Multiplicación</option>
                              <option value="division">División</option>
                         </select>
                    </div>
                    <InputForm label="Primer número" setValue={setNumero1} id="1" />
                    <InputForm label="Segundo número" setValue={setNumero2} id="2" />
                    <div className="flex ">
                         <Button className="w-1/3mx-auto mt-4" onClick={() => calcular()}>
                              Calcular
                         </Button>
                    </div>
               </FormContainer>
               {
                    resultados.map((resultado, index) => (
                         <div key={index}>
                              <p>Value: {resultado.value}</p>
                              <p>System: {resultado.system}</p>
                         </div>
                    ))
               }
          </>
     );
}