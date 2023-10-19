import React from "react";

export default function TItleIndex(props) {
     return (
          <>
               <div class="pt-12 text-center sm:pt-20">
                    <h1 class="mx-auto max-w-4xl px-16 text-center text-5xl font-semibold leading-tight sm:text-6xl">{props.title}</h1>
                    <p class="mx-auto mt-8 max-w-xl text-xl font-normal text-gray-400">{props.subtitle}</p>
               </div>
          </>
     );
}