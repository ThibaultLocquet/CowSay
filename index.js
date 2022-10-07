import infos from './informations.js';
import chalk from 'chalk' ;
import cowsay from "cowsay";
console.log(chalk.blue('Hello npm!'));



console.log(cowsay.say({
    text : `"I'm a ${infos.name} from ${infos.campus}`,
    e : "oO",
    T : "U "
}));