export default class Numero{
     
     
     // recibe un numero y lo retorna en los digitos del sistema
     getDigitos(valor) {
          if (isNaN(valor) || valor < 0) {
               throw new Error("El valor debe ser un número entero positivo.");
          }

          const digitos = [];

          do {
               digitos.push(valor % 10);

               // divide entre 10 para quitar el último dígito y redondea hacia abajo
               // es equivalente a hacer Int.Parse(valor / 10) en otros lenguajes

               valor = Math.floor(valor / 10);
          } while (valor > 0);

          // retorna el array de dígitos en orden inverso
          return digitos.reverse();
     }

     // recibe un numero lo transforma en cadena de texto divide la cadena en digitos y retorna un array de digitos
     getDigitosCadena(valor) {
          return valor.toString().split("").map(digito => this.getValorLetra(digito));
     }

     // en caso de que el sistema sea hexamal retorna el valor de las letras en el sistema decimal
     getValorLetra(valor) {
          switch (valor) {
               case "A":
                    return 10;
               case "B":
                    return 11;
               case "C":
                    return 12;
               case "D":
                    return 13;
               case "E":
                    return 14;
               case "F":
                    return 15;
               default:
                    return parseInt(valor);
          }
     }

     // recibe un array de digitos y retorna un numero en base 10
     sistemaDecimal(digitos, base) {
          var numeroBase = 0;

          digitos.forEach((digito, index) => {
               numeroBase += digito * Math.pow(base, digitos.length - index - 1);
          });

          return numeroBase;
     }

     // convertir un numero del sistema decimal a cualquier otro sistema numerico utilizando el metodo de divisiones sucesivas
     sistemaBase(numero, base) {
          const digitos = [];
          do {
               digitos.push(numero % base);
               numero = Math.floor(numero / base);
          } while (numero > 0);

          return digitos.reverse().join("");
     }




}