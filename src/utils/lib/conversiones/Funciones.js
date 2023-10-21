export default class Numero{
     
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

     getNumeroLetra(valor) {
          switch (valor) {
               case 10:
                    return "A";
               case 11:
                    return "B";
               case 12:
                    return "C";
               case 13:
                    return "D";
               case 14:
                    return "E";
               case 15:
                    return "F";
               default:
                    return valor.toString();
          }
     }

      // recibe un numero lo transforma en cadena de texto divide la cadena en digitos y retorna un array de digitos
      getDigitosCadena(valor) {
          return valor.toString().split("").map(digito => this.getValorLetra(digito));
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
               digitos.push(this.getNumeroLetra(numero % base));
               numero = Math.floor(numero / base);
          } while (numero > 0);

          return digitos.reverse().join("");
     }




}