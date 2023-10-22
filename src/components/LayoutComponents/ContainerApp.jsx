import React from "react";

export default function ContainerApp(props)
{
     return (
          <>
               <div className="flex mx-auto  flex-col w-full max-w-4xl px-4 sm:px-6 lg:px-8 dark:bg-gray-900 min-h-screen">
                    {props.children}
               </div>
          </>
     );
}