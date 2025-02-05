
    const multi = document.getElementById("multiply");
    const div = document.getElementById("divide");
    const addBtn = document.getElementById("add");
    const sub = document.getElementById("subtract");
    const clr = document.getElementById("clear");
    const result = document.getElementById("result");
  
    multiply.addEventListener("click", function(){
      let x = document.getElementById("x").value;
      let y = document.getElementById("y").value;
      let answer = Number(x) * Number(y);  
      result.innerHTML = answer;
    });
    
    div.addEventListener("click", function(){
        let x = document.getElementById("x").value;
        let y = document.getElementById("y").value;
        let answer = Number(x) / Number(y)
       document.getElementById("result").innerHTML= answer
    })
    
    add.addEventListener("click", function(){
        let x = document.getElementById("x").value;
        let y = document.getElementById("y").value;
        let answer = Number(x) + Number(y)
       document.getElementById("result").innerHTML= answer
    })
    
    sub.addEventListener("click", function(){
        let x = document.getElementById("x").value;
        let y = document.getElementById("y").value;
        let answer = Number(x) - Number(y)
       document.getElementById("result").innerHTML= answer
    })
    
    clr.addEventListener("click", function(){
        document.getElementById("x").value = ''
        document.getElementById("y").value = ''
        document.getElementById("result").innerHTML = ''
    
    })

