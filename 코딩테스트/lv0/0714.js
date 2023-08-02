/**
 * 짝수 홀수 개수
 * 1. for문을 돌면서 array의 값을 뽑아낸다
 * 2. %로 짝수의 개수를 체크한다.
 */
function solution (list) {
    let newArray = [];
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < list.length; i++) {
        if(list[i] % 2 === 0) evenCount++;
        else oddCount++;
    }
    newArray = [evenCount, oddCount]
    console.log(newArray)
    return newArray;
}

solution ([1,2,3,4,5]); //[2,3]
solution ([1,3,5,7]); //[0,4]


/**
 * 피자 나눠 먹기 (1)
 */
function solution2 (n) {
    let answer = Math.ceil(n / 7);
    // return answer;
}
solution2(7); //1
solution2(1); //1

/**
 * 편지
 */

function solution3 (m) {
    let answer = 0;
    answer = m.length
    console.log(answer*2)
    return answer;
}

// solution3("happy birthday!"); //30
// solution3("I love you~"); //22

/**
 * 아이스 아메리카노
 */

function solution4 (money) {
    let answer = [];
    let price = 5500;
    let maxIce = Math.floor(money / price);
    let leftMoney = money-(maxIce*price);
    answer = [maxIce, leftMoney]
    return answer;
}
solution4(5500); // [1, 0]
solution4(15000); // [2, 4000]

/**
 * 순서쌍의 개수
 */

function solution6(n) {
    let count = 0;
    for(let i = 0; i<=n; ++i) {
        if(n % i === 0) {
            ++count;
        }
    }
    return count;
}

// console.log(solution6(20)); //6
// solution6(100); //9

/**
 * 배열 뒤집기
 */

function solution7 (num) {
    let answer = [];
    for(let i = num.length-1; 0 <= i; i--) {
        answer.push(num[i]);
        // console.log(num[i])
    }
    // console.log(answer)
    return answer;
}

function a() {
    const arr = [1,2,3,4,5];
    let i;
    const r = [];
    for(i = 0; i < arr.length; ++i) {
        if(arr[i] % 2 !== 0) {
            continue;
        }
        r.push(arr[i]);
    }
    console.log(r);
}

//solution8([1, 2, 3, 4, 5]); //[5, 4, 3, 2, 1]
// solution7([1, 1, 1, 1, 1, 2]); //[2, 1, 1, 1, 1, 1]
// solution7([1, 0, 1, 1, 1, 3, 5]); //[5, 3, 1, 1, 1, 0, 1]

/**
 * 최댓값 만들기(1)
 * step1. 배열을 내림차순으로 정렬하기
 * step2. 차순 정렬 후
 */

function solution8 (numbers) {
    let numArray = numbers.sort((a, b) => {return b - a;})
    let arr = numbers[0] * numbers[1];
    return arr;
}

// solution8([1, 2, 3, 4, 5]); //20
// solution8([0, 31, 24, 10, 1, 9]); //744

function solution9 (n) {
    let answer='';
    for(let i = n.length-1; 0 <= i; i--) {
        answer = answer + n.charAt(i);
    }
    return answer;
}

solution9 ("jaron");