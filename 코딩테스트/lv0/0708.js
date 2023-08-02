function solution(num1, num2) {
    let answer = num1 / num2;
    changeNum = Math.floor(answer)
    console.log(changeNum)
    return changeNum;
}

// solution(10, 5)
// solution(7, 2)


function solution1 (num1, num2) {
    let answer1 = (num1 / num2) * 1000;
    changeNum = Math.floor(answer1);
    console.log(changeNum)
    return changeNum;
}

// solution1(3, 2);
// solution1(7, 3);
// solution1(1, 16);

function solution2 (num1, num2) {
    let answer = 0;
    if(num1 !== num2) {
        answer = -1;
    } else if (num1 === num2) {
        answer = 1;
    }
    return answer;
}

// solution2(2, 3);
solution2(11, 11);