export default class FuncionConversion{

     /* converter de decimal a binario */
     static decimalToBinary(decimal){
            return parseInt(decimal, 10).toString(2);
     }

     /* converter de octal a binario */
     static octalToBinary(octal){
               return parseInt(octal, 8).toString(2);
      }

     /* converter de hexadecimal a binario */
     static hexadecimalToBinary(hexadecimal){
               return parseInt(hexadecimal, 16).toString(2);
     }

     /* converter de binario a decimal */
     static binaryToDecimal(binary){
               return parseInt(binary, 2).toString(10);
     }

     /* convertir de binario a octal */
     static binaryToOctal(binary){
               return parseInt(binary, 2).toString(8);
     }

     /* convertir de binario a hexadecimal */
     static binaryToHexadecimal(binary){
               return parseInt(binary, 2).toString(16);
     }


     

     
}