/**
 * 배열의 평균값
 */
function solution(num) {
    let newSum = 0;
    for(let i = 0; i < num.length; i++) {
        newSum += num[i]
        // console.log(newSum)
    }
    let answer = newSum / num.length
    return answer;
}

// solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //5.5
// solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]); //94.0

/**
 * 양꼬치
 */
function solution1(n, k) {
    let price = 12000;
    let drink = 2000;
    let newNum = Math.floor(n / 10);
    // console.log('newNum', newNum)
    let answer = ((n * price) + (k * drink)) - (newNum * drink);
    // console.log(answer)
    return answer;
}

// 몇인분, 음료개수
// solution1(10,3);
// solution1(64,6);

/**
 * 점의 위치 구하기
 */
function solution2(dot) {
    let x = dot[0];
    let y = dot[1];
    if(0 < x && 0 < y) {
        return 1;
    } else if (0 > x && 0 < y) {
        return 2;
    } else if (0 > x && 0 > y) {
        return 3;
    } else {
        return 4;
    }
}

// solution2([2, 4]); //1
// solution2([-7, 9]); //2

/**
 * 중복된 숫자 개수
 */
function solution4 (array, n) {
    let answer = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
        if(array[i] === n) {
            count++;
            answer = count;
        }
    }
    return answer;
}

// solution4([1, 1, 2, 3, 4, 5], 1); //2
// solution4([0, 2, 3, 4], 1); //0

/**
 * 피자 나눠 먹기 (3)
 */
function solution5 (slice, n) {
    let answer = 0;
    let sliceNum = 0;
    answer = n / slice;
    sliceNum = Math.ceil(answer)
}

// solution5(7, 10); //2
// solution5(4, 12); //3

/**
 * 배열의 유사도
 * step1. 파라미터로 들어온 배열의 길이를 구한다.
 */

function solution6 (s1, s2) {
    let answer = [];
    let num = 0;
    answer = s1.filter(item => s2.includes(item))
    num = answer.length;
    return answer;
}

solution6(["a", "b", "c"], ["com", "b", "d", "p", "c"]); //2
// solution6(["n", "omg"], ["m", "dot"]);