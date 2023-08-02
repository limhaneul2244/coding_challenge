/**
 * 모음제거
 */
const items = ["a", "e", "i", "o", "u"];
function solution(my_string) {
  const result = my_string.split('');
  let lastVal = result.filter((char)=> {
    console.log('char', char)
    !items.includes(char)
  })
  lastVal = lastVal.join('')
  console.log(lastVal)
  return lastVal;
}

solution('bus'); //"bs"
// solution('nice to meet you'); //"nc t mt y"