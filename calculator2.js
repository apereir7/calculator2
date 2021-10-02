let result = document.getElementById("result");

let num = [];

function add ( ...args ) {
  return args.reduce( (a,b) => a+b);
}
function subtract (...args ) {
    return args.reduce( (a,b) => {
      return a-b;
  });
}

function sum (array) {
  if ( Array.isArray(array)) {
    if (array.length == 0) {
      return 0;
    }else if ( array.length == 1) {
      return array[0];
    } else if ( array.length > 1) {
      const answer =  array.reduce( (a, b) => {return  a + b} , 0);
      return answer;
    }  
  }
}

function multiply (a,b) {
    return a*b;
}

function power(a,b) {
    return Math.pow(a,b);
}

function factorial (a) {
  if ( a == NaN ) {
    return;
  }else {
    if ( a == 0 ) { 
      return 1; 
    }else {
      const b = a-1;
      for ( let i = b ; i > 0 ; i--) {
        a *= i;
        if (i == 1) {
          return a;
        }
        continue;
      }
    }
  }  
}

function divide (a,b) {
  if ( b == 0) {
    return undefined;
  }else {
    return a* 1/b;
  }
}

function operate (number1,operator,number2) {
  if (  operator == `+` ) {
    return add(number1,number2);
  }else if ( operator == "-" ) {
    return subtract(number1,number2)
  }else if ( operator == "*" ) {
    return multiply(number1,number2)
  }else if ( operator == "/" ) {
    return divide(number1,number2)
  }else if ( operator == "=") {

  }
}


let display = document.getElementById(`display`);


let buttons = [...document.querySelectorAll(`.button`)];

function clear () {
  display.textContent = '';
}


let i = 0;






function changeColor (id) {
  let list = document.querySelectorAll(".button");
  for (let k = 0; k < list.length; k++) {
    list[k].style.backgroundColor = "rgb(207, 221, 212)";
  }
  document.getElementById(`${id}`).style.backgroundColor = "blue";
}



let digits = buttons.forEach( (button) =>  {
  button.addEventListener( `click`, (e) => {
    if (display.textContent == 'error') {
      display.textContent = "";
    }
    
    display.textContent += button.id;
    changeColor(button.id);
    let last = display.textContent.charAt(display.textContent.length-1);
    if ( ( (last == "+")||(last == "-")||(last == "/")||(last == "*") )   &&   (i == 0)    &&   (display.textContent.length == 1)  ) {
      if ( num != 0) {
         num[1] = last;
         i = 1;
      }else if (last == "-" && num == 0) {
        num[0] = "-";
      }else {
      display.textContent = 'error';
      }   
    }else if (display.textContent.charAt(display.textContent.length-1) == '+') {
      if( i == 0) {
        num[0] = parseFloat(display.textContent.substring(0, display.textContent.length-1)); // this assigns everything before '+' to num[0]
        i++;
        num[1] = display.textContent.charAt(display.textContent.length-1);
        display.textContent = "";
      }else if ( i == 1) {
        i++;
        num[2] = parseFloat(display.textContent.substring(0, display.textContent.length-1));
        display.textContent = '';
        result.textContent = operate(num[0],num[1],num[2]);
        num = [];
        num.push(parseFloat(  result.textContent ));
        num[1] = "+";
        i = 1; 
      }  
    }else if (display.textContent.charAt(display.textContent.length-1) == '-') {
      if ( i == 0) {
        num[0] = parseFloat(display.textContent.substring(0, display.textContent.length-1)); // this assigns everything before '-' to num[0]
        i++;
        num[1] = display.textContent.charAt(display.textContent.length-1);
        display.textContent = "";
      }else if ( i == 1) {
        if ( num[1] == "*") {
          return
        }else {
          i++;
          num[2] = parseFloat(display.textContent.substring(0, display.textContent.length-1));
          display.textContent = '';
          result.textContent = operate(num[0],num[1],num[2]);
          num = [];
          num.push(parseFloat(  result.textContent ));
          num[1] = "-";
          i = 1;
        }
      }
    }else if (display.textContent.charAt(display.textContent.length-1) == '*'){
      if (i == 0 ) {
        num[0] = parseFloat(display.textContent.substring(0, display.textContent.length-1)); // this assigns everything before '*' to num[0]
        i++;
        num[1] = display.textContent.charAt(display.textContent.length-1);
        display.textContent = "";
      }else if (i == 1) {
        i++;
        num[2] = parseFloat(display.textContent.substring(0, display.textContent.length-1));
        display.textContent = '';
        result.textContent = operate(num[0],num[1],num[2]);
        num = [];
        num.push(parseFloat(  result.textContent ));
        num[1] = "*";
        i = 1;
      }
    }else if (display.textContent.charAt(display.textContent.length-1) == '/') {
      if (i == 0 ) {
        num[0] = parseFloat(display.textContent.substring(0, display.textContent.length-1)); // this assigns everything before '/' to num[0]
        i++;
        num[1] = display.textContent.charAt(display.textContent.length-1);
        display.textContent = "";
      }else if (i == 1) {
        i++;
        num[2] = parseFloat(display.textContent.substring(0, display.textContent.length-1));
        display.textContent = '';
        result.textContent = operate(num[0],num[1],num[2]);
        num = [];
        num.push(parseFloat(  result.textContent ));
        num[1] = "/";
        i = 1;
      }
    }else if ( button.id == `Clear`) {
      display.textContent = ``;
      num = [];
      result.textContent = '';
    }else if (button.id == `Back`) {
      const newString = display.textContent.
                          substring( 0 ,display.textContent.length - 5)
      display.textContent = newString ;
    }else if (display.textContent.charAt(display.textContent.length-1) == '=') {
      if ( i == 0) {
        display.textContent = display.textContent.substring(0, display.textContent.length-1);
        result.textContent = display.textContent;
      }else {
        num[2] = parseFloat(display.textContent.substring(0, display.textContent.length-1));
        display.textContent = "";
        result.textContent = "Result = " + operate(num[0], num[1], num[2] );
        let sub_0 = operate(num[0], num[1], num[2] );
        num = [];
        num[0] = sub_0
        display.textContent = sub_0;
        i = 0;
      };
    }else if (display.textContent == "answer") {
      display.textContent
    }else if (typeof parseFloat( display.textContent.charAt(display.textContent.length-1)) == "number" && i == 0 && num != 0) {display.textContent == "error"}
  });
});








  
