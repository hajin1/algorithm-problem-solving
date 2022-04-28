/**
 * 음양 더하기
 * https://programmers.co.kr/learn/courses/30/lessons/76501
 * 2022-04-28 
 */


function solution(absolutes, signs) {
    const answer = absolutes.reduce((acc, curr, idx) => {
        return acc += (signs[idx] ? curr : (curr * -1));
    }, 0);

    return answer;
}