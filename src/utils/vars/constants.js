import System from "../class/system";

const SYSTEMS = [
     new System("Binario", 1, "Sistema de numeración binario", [0, 1], 2),
     new System("Octal", 2, "Sistema de numeración octal", [0, 1, 2, 3, 4, 5, 6, 7], 8),
     new System("Decimal", 3, "Sistema de numeración decimal", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10),
     new System("Hexadecimal", 4, "Sistema de numeración hexadecimal", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"], 16)
];

export default SYSTEMS;