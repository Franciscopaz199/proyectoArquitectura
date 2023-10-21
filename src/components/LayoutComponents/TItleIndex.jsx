import React from "react";

export default function TItleIndex(props) {
     return (
          <>
               <div className="pt-12 text-center sm:pt-20">
                    <h1 className="mx-auto  sm:px-16 text-center text-3xl font-semibold leading-tight sm:text-5xl">{props.title}</h1>
                    <h1 className="mx-auto mt-8 max-w-xl  sm:text-xl font-normal text-gray-400">{props.title2}</h1>
                    <p className="mx-auto mt-4 md:mt-8 max-w-xl sm:text-lg sm:text-xl font-normal text-gray-400">{props.subtitle}</p>
               </div>
          </>
     );
}