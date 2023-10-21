'use client';

import React from "react";

function Header(props) {
     return (
          <>
               <div className="flex p-4  sticky top-0 p-4 sm:w-3/4 mx-auto bg-white sm:justify-between justify-center items-center">
                    <h2 className="text-blue-900 text-2xl font-bold">{ props.title }</h2>
                    <ul className="flex space-x-4">
                         <li className="text-blue-900 text-xl font-bold">{ props.subtitle }</li>
                         <li className="text-blue-900 text-xl font-bold">{ props.subtitle2 }</li>
                         <li className="text-">acerca de</li>
                    </ul>
                    {props.children}
               </div>

          </>
     );
}

export default Header;

