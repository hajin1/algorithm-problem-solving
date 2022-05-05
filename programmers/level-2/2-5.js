/**
 * 기능개발
 * https://programmers.co.kr/learn/courses/30/lessons/42586 
 * 2022-05-05
 */

function solution(progresses, speeds) {
    const answer = [];
    const days = [];

    for (let i = 0; i < progresses.length; i++) {
        days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }

    let releaseDay = days[0];
    let releaseCnt = 1;

    for (let i = 1; i < progresses.length; i++) {
        if (days[i] <= releaseDay) {
            releaseCnt++;
        } else {
            answer.push(releaseCnt);
            releaseDay = days[i];
            releaseCnt = 1;
        }
        if (i === progresses.length - 1) {
            answer.push(releaseCnt);
        }
    }
    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));