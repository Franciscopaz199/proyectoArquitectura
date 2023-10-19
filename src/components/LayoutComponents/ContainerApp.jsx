import React from "react";

export default function ContainerApp(props)
{
     return (
          <>
               <div className="flex mx-auto min-h-screen flex-col w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    {props.children}
               </div>
          </>
     );
}