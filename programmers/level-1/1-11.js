/**
 * 폰켓몬
 * https://programmers.co.kr/learn/courses/30/lessons/1845
 * 2022-05-05
 */

function solution(nums) {
    const n = nums.length / 2;
    const size = new Set(nums).size;
    return (size >= n) ? n : size;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));