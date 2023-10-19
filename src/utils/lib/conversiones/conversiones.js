/* este es el archivo principal de conversiones */
import SYSTEMS from "../../vars/constants";

export default class Conversiones {
     // funcion recibe un numero y un sistema de numeracion de origen y un sistema de numeracion de destino

     static convertir(numero, sistemaOrigen, sistemaDestino) {
          let resultado = "";
          alert("numero: " + numero + " sistemaOrigen: " + SYSTEMS[sistemaOrigen - 1].name + " sistemaDestino: " + SYSTEMS[sistemaDestino - 1].name);
          if (sistemaOrigen === sistemaDestino) {
               resultado = numero;
          } else {
               
          }
          return resultado;
     }




}