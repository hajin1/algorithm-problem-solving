/**
 * 소수 만들기
 * https://programmers.co.kr/learn/courses/30/lessons/12977
 * 2022-04-27
 */

// 내 풀이 

/**
 * 어떤 수가 소수인지 판별하는 알고리즘
 * 2부터 숫자 num의 제곱근의 범위에 약수가 없다면 num은 소수이다,
 * @param {*} number 
 * @returns 
 */
function isPrimeNumber(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if ((number % i) === 0) {
            return false;
        }
    }
    return number >= 2;
}

function solution(nums) {
    let cnt = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const value = (nums[i] + nums[j] + nums[k]);
                if (isPrimeNumber(value)) {
                    cnt += 1;
                }
            }
        }
    }
    return cnt;
}



