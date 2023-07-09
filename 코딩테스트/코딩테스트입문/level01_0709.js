/**
 * 배열 두배 만들기
 */
function solution2(numbers) {
    let answer = [];
    for(let i = 0; i <= numbers.length-1; i++) {
        answer.push(numbers[i]*2);
        console.log(answer)
    }
    return answer;
}
solution2([1,2,3,4,5]); //[2,4,6,8,10]
solution2([1, 2, 100, -99, 1, 2, 3]); //[2, 4, 200, -198, 2, 4, 6]

/**
 * 나머지구하기
 */
function solution3 (num1, num2) {
    let answer = num1 % num2;
    console.log(answer)
    return answer;
}

solution3 (3, 2); //1
solution3 (10, 5); //0

/**
 * 중앙값 구하기
 */
// 1. 오름차순 정렬하기
// 2. 정렬 후 배열 중앙에 있는 값 찾기
function solution4 (array) {
    let answer = [];
    array.sort()
    console.log(array)
}
solution4([1,2,7,10,11]); //7
solution4([9, -1, 0]); //0