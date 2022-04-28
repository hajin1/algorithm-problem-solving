/**
 * 모의고사
 * https://programmers.co.kr/learn/courses/30/lessons/42840 
 * 2022-04-28
 */

// 내 풀이
function solution(answers) {
    const exam1 = [1, 2, 3, 4, 5];
    const exam2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const exam3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const len1 = exam1.length;
    const len2 = exam2.length;
    const len3 = exam3.length;

    const answer = [];
    const scores = [
        { num: 1, score: 0 },
        { num: 2, score: 0 },
        { num: 3, score: 0 },
    ];

    answers.forEach((value, idx) => {
        (value === exam1[idx % len1]) && scores[0].score++;
        (value === exam2[idx % len2]) && scores[1].score++;
        (value === exam3[idx % len3]) && scores[2].score++;
    });
    scores.sort((a, b) => b.score - a.score);

    for (let i = 0; i < scores.length; i++) {
        answer.push(scores[i].num);
        if (i + 1 < scores.length && scores[i + 1].score < scores[i].score) {
            break;
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));


// 다른사람풀이
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
    var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
    var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
    var max = Math.max(a1c, a2c, a3c);

    if (a1c === max) { answer.push(1) };
    if (a2c === max) { answer.push(2) };
    if (a3c === max) { answer.push(3) };

    return answer;
}

// 느낀점
/**
 * 1. 각 사람의 점수를 구한다음 max를 구하고, 그 max와 동일한지 여부만 따져서 answer에 push하면 간편하다
 * 2. score구한 다음 score로 정렬하는게 불필요했구나...!
 */