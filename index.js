// Your code here
 function saturdayFun(param = "roller-skate") { return `This Saturday, I want to ${param}!` }

 function mondayWork(param = "go to the office") {return `This Monday, I will ${param}.`}

 function wrapAdjective(f='*') {
     return function(p='special') {
         return `You are ${f}${p}${f}!`
     }
 }

 function add(a,b) {return a+b}
 function subtract(a,b) {return a-b}
 function multiply(a,b) {return a*b}
 function divide(a,b) {return a/b}
 const Calculator = {add, subtract, multiply, divide}

 function actionApplyer(startInt, funcArr) {
     let a = startInt
     if (a.length === 0) {return a}
     else {
         for (let i=0; i<funcArr.length; i++){
             a = funcArr[i](a)
         }
    }
    return a
}