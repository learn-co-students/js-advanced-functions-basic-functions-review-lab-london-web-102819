
const saturdayFun = (input = "roller-skate") => {
  return `This Saturday, I want to ${input}!`
};

saturdayFun('hiking');


const mondayWork = (coding = 'go to the office') => {
  return `This Monday, I will ${coding}.`;
}

mondayWork()

const wrapAdjective = (style = '*') => {
  return function (something = 'special') {
    return `You are ${style}${something}${style}!`
  }
}


const Calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  }
}

const actionApplyer = (start, arr) => {
  let result = start;

  for (let i = 0; i < arr.length; i++) {
    result = arr[i](result);
  }
  return result;
}