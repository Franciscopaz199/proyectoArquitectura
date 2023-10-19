import React from "react";

export default function MostrarResultado(props) {
     return (
          <>
               <div class="border p-4 rounded-lg mt-10">
                    <div class="flex items-start">
                         <div class="flex flex-grow items-start gap-3">
                              <div class="flex-shrink" >
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6" onClick={() => props.onClick()}>
                                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path></svg>
                              </div>
                              <div>
                                   <div class="font-medium text-color mb-1">{props.title}</div>
                                   <div class="text-sm text-color mb-4">{props.subtitle}</div>
                                   {props.children}
                              </div>
                         </div>
                         <div class="flex"><div class="">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                         </div>
                         </div>
                    </div>
               </div>

          </>
     );
}