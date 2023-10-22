/* este es el archivo principal de conversiones */
import SYSTEMS from "../../vars/constants";
import Funciones from "./Funciones";

export default class Conversiones {

     constructor(numero, sistemaOrigen, sistemaDestino ) {
          this.numero = numero;
          this.sistemaOrigen = sistemaOrigen;
          this.sistemaDestino = sistemaDestino;
          this.funciones = new Funciones();
     }

     // convertir a decimal
     convertirDecimal() {
          const digitos  = this.funciones.getDigitosCadena(this.numero);
          return this.funciones.sistemaDecimal(digitos, this.sistemaOrigen);
     }

     convertirSistema() {
          const decimal = this.convertirDecimal();
          return this.funciones.sistemaBase(decimal, this.sistemaDestino);
     }


}