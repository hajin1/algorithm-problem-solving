/**
 * 약수의 개수와 덧셈
 * https://programmers.co.kr/learn/courses/30/lessons/77884
 * 2022-04-28
 */

// 내 풀이
// 약수의 개수구하는 알고리즘 
function getCnt(n) {
    let cnt = 0;
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            cnt++;
            if (i * i < n) {
                cnt++;
            }
        }
    }
    return cnt;
}

function solution(left, right) {
    let answer = 0;

    for (let i = left; i <= right; i++) {
        const cnt = getCnt(i);
        answer += (cnt % 2 === 0) ? i : (i * -1);
    }
    return answer;
}

console.log(solution(13, 17));

// 다른사람 풀이
// 제곱근이 정수면 약수의 개수가 홀수이다. 
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

