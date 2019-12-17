// Your code here

function saturdayFun(param = "roller-skate") {
  return `This Saturday, I want to ${param}!`;
}

function mondayWork(param = "go to the office") {
  return `This Monday, I will ${param}.`;
}

function wrapAdjective(flair = "*") {
  return function(param = "special") {
    return `You are ${flair}${param}${flair}!`;
  };
}

const Calculator = {
  add: function(x, y) {
    return x + y;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(m1, m2) {
    return m1 * m2;
  },
  divide: function(d1, d2) {
    return d1 / d2;
  }
};

function actionApplyer(startInt, arrFn) {
  let result = startInt;

  for (let i = 0; i < arrFn.length; i++) {
    result = arrFn[i](result);
  }

  return result;
}
