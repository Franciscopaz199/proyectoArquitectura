import React from "react";
import Layout from "./layouts/Layout";
import ContainerApp from "../components/LayoutComponents/ContainerApp";
import TItleIndex from "../components/LayoutComponents/TItleIndex";
import ConversionForm from "../components/Forms/ConversionForm";
import AritmeticaForm from "../components/Forms/AritmeticaForm";

import { useEffect } from "react";
import { useState } from "react";
function IndexPage() {

     const [value, setValue] = useState(0);

     useEffect(() => {
          console.log("value", value);
     }, [value]);

     const tabs = [
          { id: 0, label: 'Conversor' , component: <ConversionForm />},
          { id: 1, label: 'Aritmética' , component: <AritmeticaForm />},   
          { id: 2, label: 'Historial' },
          
     ];

     return (
          <>
               <Layout>
                    <ContainerApp>
                         <TItleIndex title="Calculadora de Sistemas Numéricos" subtitle="¿Necesitas cambiar de sistema numérico? Nuestra calculadora lo hace de manera simple y elegante." />
                         <div className="mt-7 relative z-0 flex border rounded-xl overflow-hidden dark:border-gray-700" >
                              {tabs.map(tab => (
                                   <button
                                        key={tab.id}
                                        type="button"
                                        className={`dark:hs-tab-active:text-white dark:hs-tab-active:border-b-blue-600 relative min-w-0 flex-1 bg-white first:border-l-0 border-l border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-sm font-medium text-center overflow-hidden hover:bg-gray-50 focus:z-10 dark:bg-gray-800 dark:border-l-gray-700 dark:border-b-gray-700 dark:hover:bg-gray-700 dark:hover:text-gray-400 active ${value === tab.id ? 'hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900' : ''
                                             }`}
                                        id={`bar-with-underline-item-${tab.id}`}
                                        role="tab"
                                        onClick={() => setValue(tab.id)}
                                   >
                                        {tab.label}
                                   </button>
                              ))}
                         </div>
                         {tabs[value].component}
                    </ContainerApp>
               </Layout>
          </>
     )
};

export default IndexPage;