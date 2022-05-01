/**
 * 카펫 
 * https://programmers.co.kr/learn/courses/30/lessons/42842
 * 2022-05-01
 */

// 내 풀이 
function getDividors(n) {
    const answer = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            answer.push(i);
            // 약수의 개수를 구하거나, 출력할 때에는 제곱근이 중복되면 안 되지만, 이 문제에서는 중복되어 들어가는 게 필요하다.
            // if (n / i !== i) {
            answer.push(n / i);
            // }
        }
    }
    return answer;
}

function solution(brown, yellow) {
    const dividors = getDividors(brown + yellow);
    // console.log(dividors);
    for (let i = 0; i < dividors.length; i += 2) {
        const first = dividors[i];
        const second = dividors[i + 1];
        // console.log(`fir: ${first}, second: ${second}`);
        if (((first - 2) * (second - 2)) === yellow) {
            return [second, first];
        }
    }
}


console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));