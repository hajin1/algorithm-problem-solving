/**
 * 로또의 최고 순위와 최저 순위
 * 프로그래머스 레벨 1
 * 2022-04-24
 * https://programmers.co.kr/learn/courses/30/lessons/77484 
 */

// 내 풀이
function solution(lottos, win_nums) {
    const answer = [];
    lottos.sort((a, b) => a - b);
    win_nums.sort((a, b) => a - b);

    let unknownCount = 0;
    lottos.forEach((num) => num === 0 && unknownCount++);

    let i = j = 0;
    let sameCount = 0;
    while (i < lottos.length && j < win_nums.length) {
        if (lottos[i] > win_nums[j]) {
            j++;
        } else if (lottos[i] < win_nums[j]) {
            i++;
        } else {
            sameCount++;
            i++;
            j++;
        }
    }

    answer.push(7 - (unknownCount + sameCount) >= 6 ? 6 : 7 - (unknownCount + sameCount));
    answer.push(7 - sameCount >= 6 ? 6 : 7 - sameCount);

    return answer;
}

// 다른사람 풀이
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}