/**
 * 숫자 문자열과 영단어
 * https://programmers.co.kr/learn/courses/30/lessons/81301
 * 2022-05-04
 */

// 내 풀이
function solution(s) {
    const numStrs = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    numStrs.forEach((num, i) => {
        s = s.replace(new RegExp(num, 'g'), i);
    });
    return parseInt(s, 10);
}
console.log(solution("one4seveneight"));

// 다른사람 풀이
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for (let i = 0; i < numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

// 바꾸고자 하는 문자열로 split하고 추가할 문자로 join 한다. 