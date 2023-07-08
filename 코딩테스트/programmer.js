//프로그래머스 1회차(230706)
/**
 * 같은 숫자는 싫어
 */
function solution (arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr[i+1]) { //앞의 값과 뒤의 값을 비교
            newArr.push(arr[i]);
            console.log(newArr)
        }
    }
    console.log('최종값:', newArr)
    return newArr;
}

solution([1,1,3,3,0,1,1]);
// solution([4,4,4,3,3]);
// solution([4,4,4,3,3,2,2]);

/**
 * 3진법 뒤집기
 * 3진법으로 변경
 * 3진법에서 reverse
 * reverse된 값을 10진법으로 다시 변경
 */

function reverse(num) {
    let newStr = "";
    let changeNum = num.toString(3);
    console.log('3진법변경:', changeNum, typeof(changeNum));
    for(let j = changeNum.length-1; j >= 0; j--) {
        // newStr = newStr + changeNum[j];
        newStr = `${newStr}${changeNum[j]}`;
        //console.log(newStr, typeof(newStr))
    }
    let newNum = parseInt(newStr, 3);
    console.log('10진법-> 3진법으로:', newNum)
    return newNum;
}


reverse(45);
// reverse(125);