import React from "react";

export default function FormContainer(props) {
     return (
          <div className="flex flex-col overflow-hidden sm:px-10 sm:py-6 border  rounded-lg rounded-lg mt-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-4 py-5 bg-white sm:p-6">  
               {props.children}
          </div>
     );
}