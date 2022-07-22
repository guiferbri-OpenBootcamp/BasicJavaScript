import { suma, multiplica } from './controller.js'
import chalk from 'chalk';

const sumA = suma(1,2);
const sumB = suma(4,5);
const mult = multiplica(sumA, sumB);

console.log(chalk.green(mult));