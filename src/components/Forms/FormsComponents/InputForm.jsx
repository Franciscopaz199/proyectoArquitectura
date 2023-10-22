import React from "react";
import SYSTEMS from "../../../utils/vars/constants";

import { useState } from "react";
import { useEffect } from "react";

export default function InputForm(props) {

     const [value, setValue] = useState({
          value: "",
          system: ""
     });
     
     useEffect(() => {

     }, [value]);


     const validar = (e) => {
          const dominio = SYSTEMS.find(system => system.base == document.getElementById(`sistemaOrigen${props.id}`).value).domain.toString();
          if (dominio != undefined) {
               const valor = e.target.value;
               const regex = new RegExp(`^[${dominio}.]+$`);
               if (regex.test(valor)) {
                    props.setValue({ value: valor, sistema: document.getElementById(`sistemaOrigen${props.id}`).value });
               } else {
                    e.target.value = valor.slice(0, valor.length - 1);
               }
          }
     }

     return (
          <>
               <div>
                    <label for="hs-inline-leading-pricing-select-label" class="block text-sm font-medium mb-2 dark:text-white">{props.label}</label>
                    <div class="relative">
                         <input type="text" id="hs-inline-leading-pricing-select-label" name="inline-add-on" class="py-3 px-4 pl-9 pr-20 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="0.00"
                              onChange={(e) => validar(e)}
                         />
                         <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                              <span class="text-gray-500">#</span>
                         </div>
                         <div class="absolute inset-y-0 right-0 flex items-center text-gray-500 pr-px">
                              <label for={`sistemaOrigen${props.id}`} class="sr-only">Currency</label>
                              <select name="hs-inline-leading-select-currency" class="block w-full border-transparent rounded-md focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800" id={`sistemaOrigen${props.id}`} onChange={(e) =>  setValue({value: value.value, sistema: e.target.value})}>
                                   {
                                        SYSTEMS.map((system) => (
                                             <option value={system.base} >{system.name}</option>
                                        ))
                                   }
                              </select>
                         </div>
                    </div>
               </div>
          </>
     );

}