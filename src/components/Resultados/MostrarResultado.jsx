import React, { useEffect } from "react";
import Latex from "react-latex";
var latex = require('react-latex');

export default function MostrarResultado(props) {
     useEffect(() => {
          // Llamar scrollIntoView después de que el componente se cargue
          props.scrollIntoView();
     }, [props.scrollIntoView]);
      // El segundo argumento es un arreglo de dependencias vacío para que se ejecute solo una vez
     return (
          <>
               <div class="border p-4 rounded-lg mt-10 " id="resultado">
                    <div class="flex items-start">
                         <div class="flex flex-grow items-start gap-3">

                              <div class="flex flex-col flex-grow w-full">
                                   <div class="font-medium text-color mb-1">{props.title}</div>
                                   <div class="text-sm text-color mb-4">{props.subtitle}</div>
                                   <h3 className="sm:text-2xl font-bold text-blue-900 text-center w-full text-1xl">
                                        <Latex>{` $ ${props.numeroOrigen}_{{${props.sistemaOrigen}}} = $ `}</Latex>
                                        <Latex>{`$${props.resultado}_{{${props.resultadoBase}}}$`}</Latex>

                                   </h3>
                              </div>
                         </div>
                         <div class="flex">
                              <div className="flex space-x-2">
                                   <p>
                                        copy
                                   </p>
                                   <p>
                                        copyAll
                                   </p>

                              </div>
                         </div>
                    </div>
               </div>

          </>
     );
}