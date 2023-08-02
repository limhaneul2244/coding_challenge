function solution1(strlist) {
    let answer = [];
    for(let i of strlist) {
        answer.push(i.length);
    }
    return answer;
}

// solution1 (["We", "are", "the", "world!"]); //[2, 3, 3, 6]
// solution1 (["I", "Love", "Programmers."]);

/**
 * 자릿수 더하기
 */
// function solution2(n) {
//     let answer = n.toString().split('').map(Number);
//     let sum= 0;
//     console.log(answer)
//     for(let i = 0; i < answer.length; i++) {
//         sum += answer[i];
//     }
//     return sum;
// }

function solution3 (n) {
    return n
    .toString()
    .split("")
    //.reduce((acc, cur) => acc + Number(cur), 0);
    .reduce(function(acc, cur) {
        return acc + cur;
    }, 0);
}

function solution3 (n) {
    const strN = n.toString();
    const arrN = strN.split("");
    
}

function reduce(arr) {
    let result = 0;
    for(let i = 0; i < arr.length; ++i) {
        result += arr[i];
    }
    return result;
}

solution3(1234)//10
// solution2(930211)//16



/**
 * 머쓱이보다 키 큰 사람
 */
function solution4(array, height) {
    var answer = 0;
    let count = 1;
    for (let i of array) {
        if(i > height) {
            answer += count;
            return answer;
        }
    }
    return answer;
}
// solution4([149, 180, 192, 170], 167); //3
// solution4([180, 120, 140], 190); //0



/**
 * 옷가게 할인 받기
 */
// function solution5(price) {
//     let answer = 0;
//     let dc = price * 0.1;
//     console.log(dc)
//     if (price >= 500000) { //50만원 이상 20%
//         answer = price - (dc*2);
//     } else if (price >= 300000) { //30만원이상 10% 할인
//         answer = price - (dc*3);
//     } 
//     else { //10만원 이상 5%할인
//         answer = price - (dc * 0.5);
//     }
//     return answer;
// }


// solution5(200000); //10000
// solution5(150000); //142,500
// solution5(350000); //245000
// solution5(580000); //464000



/**
 * 배열자르기
 */
// function solution6(numbers, num1, num2) {
//     let answer = [];
//     for(let i = num1; i <= num2; i++) {
//         answer.push(numbers[i])
//     }
//     return answer;
// }

// solution6([1, 2, 3, 4, 5], 1, 3) //[2, 3, 4]
// solution6([1, 3, 5], 1, 2) //[3, 5]


/**
 * 문자 반복 출력하기
 */
// function solution7(my_string, n) {
//     let answer = '';
//     let newStr = my_string.split('');
//     for(let i = 0; i < newStr.length; i++) {
//         answer = answer.concat(newStr[i].repeat(n))
//     }
//     return answer;
// }


// my_char 를 n 번 출력하는 기능
//  my_char : "a", n : 5 이면
// "aaaaa"
// function repeat(m, n) {
//     let answer = [];
//     for (let i = 1; i < n; i++) {
//         answer.push(m);
//     }
//     let newStr = answer.join('');
//     console.log(newStr, typeof(newStr))
// }
// repeat('aa', 5)



// answer.map((item, index) => {
//     console.log(item, index)
// })

// solution7("hello", 3) //"hhheeellllllooo"



/**
 * 짝수는 싫어요
 */
// function solution8(n) {
//     let answer = [];
//     for(let i = 0; i <= n; i++) {
//         if(i % 2 === 1) {
//             answer.push(i)
//         }
//     }
//     console.log(answer)
// }
// solution8(10) //[1, 3, 5, 7, 9]


// /**
//  * 모음 제거
//  */
// function solution9(myStr) {
//     let basic = ['a', 'e', 'i', 'o', 'u'];
//     let change = myStr.split('').toString();
//     let t = [];

//     let r = basic.map((elem) => {
//         t.push(elem)
//         console.log(t)
//     })
// }

// solution9("bus"); //"bs"
// solution9("nice to meet you"); //"nc t mt y"




/**
 * 특정 문자 제거하기
 */
// function solution10(my_string, letter) {
//     let my_char = my_string.split('');
//     let r = [];
//     let answer = '';

//     my_char.map((elem) => {
//         if(elem !== letter) {
//             r.push(elem)
//         }
//     })
//     answer = r.join('');
// }

// solution10("abcdef", 'f') //"abcde"


/**
 * 문자열안에 문자열
 */
function solution11(str1, str2) {
    let answer = str1.includes(str2);
    if(answer) {
        return 1;
    } else {
        return 2;
    }

}
solution11("ab6CDE443fgh22iJKlmn1o", "6CD")
// solution11("ppprrrogrammers", "pppp")

/**
 * 숨어있는 숫자의 덧셈(1)
 */
function solution12(my_string) {
    let array = my_string.split('');
    let r = [];
    let answer = 0;
    for(let i = 0; i < array.length; i++) {
        if(!isNaN(array[i])) {
            r.push(array[i]);
        }
    }
    let newArray = r.map(Number);
    newArray.forEach(function(elem){
        answer += elem;
    })
}
solution12("aAb1B2cC34oOp") // 10
solution12("1a2b3c4d123") // 16

/**
 * 문자열 정수의 합
 */
function solution13 (num_str) {
    let answer = num_str.split('');
    let sum = 0;
    
    for(let i = 0; i < answer.length; i++) {
        let result = Number(answer[i])
        sum += result;
        return sum;
    }

}
solution13("123456789") //45
// solution13("1000000") //1

/**
 * 가위 바위 보
 * 가위2 = 바위0
 * 바위0 = 보5
 * 보5 = 가위2
 */
function solution14(rsp){
    let answer = rsp.split('').map(Number);
    let r = '';
    for(const item of answer ) {
        if(item === 2) {
            r += 0;
        }
        else if(item === 0) {
            r += 5;
        }
        else {
            r += 2;
        }
    }
    return r;
}
solution14('2') // 0
solution14('205') // 052


