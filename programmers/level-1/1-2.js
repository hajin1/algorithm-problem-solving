/**
 * 없는 숫자 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/86051
 * level 1 
 * 2022-04-25
 */

// 내 풀이
function solution(numbers) {
    const answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((acc, curr) => (!numbers.includes(curr)) ? acc + curr : acc, 0);
    return answer;
}

console.log(solution([0, 3, 4]));

// 다른사람 풀이
function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => cur + acc, 0);
}

/**
 * 내 풀이는 O(n제곱)인데. 다른사람 풀이는 O(n)이다.
 * reduce를 쓰면 좋겠다는 생각은 했지만, 0~9까지 더한 값인 45에서 numbers 배열 값들을 더한 값을 빼면 훨씬 수월하다는 생각까진 못했다.
 * 와우. 대단하다. 
 *  */ 