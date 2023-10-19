import React from "react";
import { Footer } from 'flowbite-react';

export default function FooterWithLogo() {
     return (
          <Footer container>
               <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">

                    </div>
                    <Footer.Divider />
                    <Footer.Copyright
                         by="Desarrollado para la clase de Arquitectura de Computadoras"
                         href="#"
                         year={2023}
                    />
               </div>
          </Footer>
     )
}
