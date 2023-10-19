'use client';

import React from "react";
import { Button } from 'flowbite-react';
import { Accordion } from 'flowbite-react';

function Header(props) {
     return (
          <>
               <div className="flex sm:justify-space-between p-4  sticky top-0 p-4 w-3/4 mx-auto bg-white ">
                    <h2 className="text-blue-900 text-2xl font-bold">{ props.title }</h2>
                    <p>.</p>
                    {props.children}
               </div>

          </>
     );
}

export default Header;

