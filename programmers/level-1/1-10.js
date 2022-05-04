/**
 * 체육복
 * https://programmers.co.kr/learn/courses/30/lessons/42862
 * 2022-05-04
 */

// 내풀이
function solution(n, lost, reserve) {
    const lostSet = new Set(lost.sort((a, b) => a - b));
    const reserveSet = new Set(reserve.sort((a, b) => a - b));

    reserveSet.forEach((value) => {
        if (lostSet.has(value)) {
            lostSet.delete(value);
            reserveSet.delete(value);
        }
    });
    reserveSet.forEach((value) => {
        if (lostSet.has(value - 1)) {
            lostSet.delete(value - 1);
        } else if (lostSet.has(value + 1)) {
            lostSet.delete(value + 1);
        }
    });
    return n - lostSet.size;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(10, [3, 4, 10], [2, 3]));
