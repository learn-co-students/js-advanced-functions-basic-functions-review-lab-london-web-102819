// Your code here
function saturdayFun (activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};


let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(string = "*"){
    return function(params='special'){ 
        return `You are ${string}${params}${string}!`;
    }
};

const Calculator = { 
    add: function(int1, int2){return int1+int2 },
    subtract: function(int1, int2){return int1-int2},
    multiply: function(int1, int2){return int1*int2},
    divide: function(int1, int2){return int1/int2}
}

function actionApplyer(startingInt, array){
    for (let i=0; i<array.length; i++){
        startingInt = array[i](startingInt)
    }
    return startingInt;
}