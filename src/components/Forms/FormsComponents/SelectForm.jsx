import React from "react";

export default function SelectForm(props) {

     return (
          <select name="sasd" id="">
               {
                    props.options.map((option, index) => {
                         return (
                              <option key={index} value={option.value}>{option.label}</option>
                         )
                    })
               }
          </select>

     );

}


