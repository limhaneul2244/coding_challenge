/**
 * 나이출력
 */
function solution (age) {
    let year = 2022;
    let birthDay = (year-age) + 1;
    return birthDay;
}

solution(40); //1983

/**
 * 각도기
 */
function solution1 (angle) {
    if(0 < angle && angle < 90) {
        return 1;
    } else if (angle === 90) {
        return 2;
    } else if(90 < angle && angle < 180) {
        return 3;
    } else if(angle === 180) {
        return 4;
    }
}

solution1(70); //1
// solution1(89); //1
// solution1(90); //2
// solution1(91); //3
// solution1(180); //4

/*
비교 연산자
===
<
>
>=
<=
*/

/*
논리연산자
&& : 둘다  true 인 경우 true , 하나라도  false 이면 false
|| : 둘중에 하나만 true 이면 true, 둘다 false이면 false

&& : *
|| : +

0: false
1: true

1 && 1 = 1
1 && 0 = 0
0 && 0 = 0

1 || 1 = 2(t)
1 || 0 = 1(t)
0 || 0 = 0(f)


byte TURE = 1;
byte FALSE = 0;

 */

/**
 * 짝수의 합
 */
function solution2 (n) {
    let answer = 0;
    for(let i = 1; i <= n; i++) {
        if(i % 2 == 0) {
            answer = answer + i;
        }
    }
    console.log(answer)
    return answer;
}
solution2(10); //30
solution2(4); //6
