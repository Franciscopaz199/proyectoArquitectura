import React from "react";

export default function FormContainer(props) {
     return (
          <div className="flex flex-col overflow-hidden sm:px-10 sm:py-6 border  rounded-lg rounded-lg mt-10 shadow-sm px-4 py-5 bg-white sm:p-6 dark:bg-gray-800 dark:border-gray-700"> 
               {props.children}
          </div>
     );
}