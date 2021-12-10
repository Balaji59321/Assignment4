// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

  let inp = userInput[0].split(' ');
  let ans = param =>  param.reduce((acc,ele)=> acc+ +ele,0);
  console.log(ans(inp));

});
