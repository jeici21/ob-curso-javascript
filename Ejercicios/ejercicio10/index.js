import { suma, multiplica } from "./controller.js";
import chalk from "chalk";

const sum = suma(5, 5);
const mul = multiplica(5, 5);
console.log(chalk.green(sum, mul));