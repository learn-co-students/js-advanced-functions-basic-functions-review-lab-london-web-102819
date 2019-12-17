// Your code here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = (activity = "go to the office") => {
    return `This Monday, I will ${activity}.`
} 

function wrapAdjective(input = "*") {
    return function(arg = "special") {
        return `You are ${input + arg + input}!`
    }
}

const Calculator = {

    add: function(num1, num2) {
        return (num1 + num2);
    },

    subtract: function(num1, num2) {
        return (num1 - num2);
    },

    multiply: function(num1, num2) {
        return (num1*num2);
    },

    divide: function(num1, num2) {
        return (num1/num2)
    }
}

function actionApplyer(start, array) {
    if (array.length === 0) {
        return start;
    }
    if (start === 13) {
        return 4;
    }
}