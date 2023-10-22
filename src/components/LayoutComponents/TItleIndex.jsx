import React from "react";

export default function TItleIndex(props) {
     return (
          <>
               <div className="pt-2 text-center sm:pt-3 mt-10">
                    <h1 className="mx-auto  sm:px-16 text-center text-3xl font-semibold leading-tight sm:text-5xl">{props.title}</h1>
                    <p className="mx-auto mt-2 md:mt-3 max-w-xl sm:text-lg sm:text-xl font-normal text-gray-400">{props.subtitle}</p>
               </div>
          </>
     );
}