/**
 * 3진법 뒤집기
 * https://programmers.co.kr/learn/courses/30/lessons/68935
 * 2022-05-05
 */

// 내풀이
function solution(n) {
    let three = n.toString(3);
    three = three.split("").reverse().join("");
    return parseInt(three, 3);
}

console.log(solution(45));
console.log(solution(125));


// 다른사람 풀이 
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

// [...str] <-하면 스트링을 배열로 만들어주는구나 