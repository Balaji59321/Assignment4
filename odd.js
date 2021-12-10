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

  let inp = userInput[0].split(' ').map(Number);
  let ans = param =>  param.filter((ele,ind)=> {return ele%2===1 });
  console.log(ans(inp));

});
