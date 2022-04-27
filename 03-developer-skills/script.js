// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// singlequote on prettierrc changed double quotes to single quotes
const x = '23';
if (x === 23) console.log(23);

// arrowParens changed (birthYear) to birthYear
const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1999));

//live-server in terminal to pull up window
*/

/*
//                                  PROBLEM 1
// Calculate temp amplitude
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// - what is temp amplitude?   Answer: difference between higher/lowest temp
// - How to compute the max and min temps?
// What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// -- How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max and return it

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


//                                    PROBLEM 2

// Function should now receive 2 arrays of temps

// 1)  Understanding the problem
// - With 2 arrays, should we implement functionality twice?  NO!  Just merge arrays.

// 2) Break up into sub problems
// - Merge into 2 arrays?

//temperatures = t1
//new array to merge = t2
//.concat to merge arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
*/

/*
const measureKelvin = function () {
  const measurement = {
    typeof: 'temp',
    unit: 'celsius',
    // C) FIX THE BUG
    //value: Number(prompt('Degrees celsius: ')),
    value: 10,
  };

  // B)  FIND THE BUG
  console.table(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);

  const Kelvin = measurement.value + 273;
  return Kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// USING A DEBUGGER
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    // debugger; //automatically opens debugger tool
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY
console.log(amplitudeBug);
*/

//                                  CODING CHALLENGE 1

//TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]
// Make function that creates a string for a forecast using the index of an array.
/*
const temperatures = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    //str = str + `${arr[i]}°C in ${i + 1} days .... `;
    str += `${arr[i]}°C in ${i + 1} days .... `;
  }
  console.log('.... ' + str);
  return str;
};

printForecast(temperatures);
printForecast(temps2);
*/
