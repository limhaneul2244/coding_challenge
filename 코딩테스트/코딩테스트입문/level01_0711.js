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
solution1(10,3);
solution1(64,6);

/**
 * 점의 위치 구하기
 */
function solution2 (dot) {
    let answer = 0;
    for (let i = 0; i < dot.length; i++) {
        answer = dot[i];
        
        console.log(answer, x)
        if(0 < answer ) {
            console.log('1사분면')
        }
    }
    
}

solution2([2, 4]); //1
solution2([-7, 9]); //2