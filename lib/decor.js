import chalk from "chalk";
import fig from "figures";

const { red, yellow, green, blue, magenta, cyanBright } = chalk;
const { lozengeOutline } = fig;

export const Rb = (strText) => red.bold(strText);
export const G = (strText) => green(strText);
export const B = (strText) => blue(strText);
export const Y = (strText) => yellow(strText);
export const P = (strText) => magenta(strText);
export const C = (strText) => cyanBright(strText);