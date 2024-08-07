import { getStudentData } from "./data.js";

console.log(getStudentData());

const update = getStudentData().flat();

console.log(update);

const newUpdate = update.reduce((sum, item) => {
    return sum + item.sPassed;
}, 0);

console.log(newUpdate)