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
  let ans = param =>  param.filter((ele,ind)=> {
      let flag = 0;
      if(ele ===1){
        flag=1;    
      }
      for(let i=2;i<=10;i++){
          if(+ele%i===0 && +ele!==i){
              flag++;
              break;
          }
      }
      if(flag === 0) {
        return ele;
      }
  });
  console.log(ans(inp).join(' '));

});
