function maxNumber(input) {
let index = 0;
let command = input[index];
index++;
let myMaxNumber = 0;
while(command !== "Stop"){
    let num = Number(command);
if (num > myMaxNumber) {
    myMaxNumber = num;
}
command = input[index];
index++;
}
console.log(myMaxNumber);

}
maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
    