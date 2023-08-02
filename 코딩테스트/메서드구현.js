/**
 * map 구현하기
 */

// arr를 순회 하면서 callback에 전달하고
// callback에서 반환된 값을 새로운 배열에 넣어
// 새로운 배열을 반환 한다.
function map(arr, callback) {
  console.log(arr, callback)
  let newArr = [];
  for(let item of arr) {
    newArr.push(callback(item));
  }
  return newArr;
}
// const result = map([1,2,3], item => item * 2);
// console.log('result', result); // [2, 4, 6]


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
  console.log('타입체크', typeCheck(result))
  return result;
}
const result1 = filter(items, (item) => item.length > 6);
console.log(`최종결과: ${result1}`); //["exuberant", "destruction", "present"]

/***
 * reduce 구현하기
 */
function reduce(arr, callback) {

}
const result2 = reduce([1, 2, 3, 4], (acc, current) => {
  return acc + current
}, 0);
console.log(result2); // 10
const result3 = reduce([1, 2, 3, 4], (acc, current) => {
  return acc * current
}, 0);
console.log(result3); // 24

