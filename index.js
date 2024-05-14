#! usr/bin/env node
// count down project
// install date module(npm install date-fans)
console.log(chalk.yellow.bold("\n\ ******** WELCOME TO COUNT DOWN TIMER *********\n"));
import chalk from "chalk";
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "PLEASE ENTER THE AMOUNT OF SECOND:-",
    validate: (input) => {
        if (isNaN(input)) {
            return "PLEASE ENTER VALID NUMBER :-";
        }
        else if (input > 60) {
            return "SECONDS MUST BE IN 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log(chalk.red.bold("Timer has Expired"));
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(chalk.red.magenta(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`));
    }), 1000);
}
startTime(input);
