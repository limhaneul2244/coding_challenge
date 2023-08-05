/**
 * map 구현하기
 */

// arr를 순회 하면서 callback에 전달하고
// callback에서 반환된 값을 새로운 배열에 넣어
// 새로운 배열을 반환 한다.
function map(arr, callback) {
  let newArr = [];
  for(let item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
}
const result1 = map([1,2,3], item => item * 2);
console.log('map result1', result1); // [2, 4, 6]


/**
 *
 * 타입체크함수
 */
function typeCheck(value) {
  const return_value = Object.prototype.toString.call(value);
  const type = return_value.substring(
      return_value.indexOf(" ") + 1,
      return_value.indexOf("]")
  );
  return type.toLowerCase();
}


/**
 * filter 구현하기
 * 배열을 순회하면서 callback에 전달
 * 해당 조건에 부합하지 않으면 빈배열 반환하고
 * 부합하는 조건만 반환한다.
 */
const items = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
function filter(arr, callback) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    const filterCallback = callback(items[i]);
    if(filterCallback) {
      result.push(items[i]);
    }
  }
  // console.log('타입체크', typeCheck(result))
  return result;
}
const result2 = filter(items, (item) => item.length > 6);
console.log(`filter 최종결과: ${result2}`); //["exuberant", "destruction", "present"]

/***
 * reduce 구현하기
 * accumulator : 콜백의 반환값을 누적한다.
 * currentValue : 처리할 현재 인덱스
 * initailValue를 제공했으므로 array는 0부터 시작한다.
 */
function reduce(arr, callback) {
  let initialValue = arr[0];
  let accumulator = initialValue;
  for(let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    accumulator = callback(accumulator, currentVal);
  }
  return accumulator;
}
const result3 = reduce([1, 2, 3, 4], (accumulator, currentVal) => {return accumulator + currentVal}, 0);
console.log('reduce result3', result3); // 10
const result4 = reduce([1, 2, 3, 4], (accumulator, currentVal) => {return accumulator * currentVal}, 0);
console.log('reduce result4', result4); // 24