/**
 * 타겟 넘버
 * https://programmers.co.kr/learn/courses/30/lessons/43165 
 * 2022-05-02
 * level 2
 */

/**
 * solution_old가 처음에 풀었던 방법. 배열을 큐로 사용했는데 공간복잡도가 많이 필요하다. 시간초과가 나왔음.
 * 다음으로 검색을 통해 solution1 방법을 알게되었다. 참고 https://bomoto.tistory.com/60?category=933451 
 * 어떤 원리로 풀어지는지 완전히 이해는 안감 ㅜ
 * 다음으로 생각한 풀이가 solution 함수. 재귀로 짜면 시간초과없이 금방 끝난다. 재귀만세. 
 */

function solution(numbers, target) {
    let len = numbers.length;
    function recursive(value, idx) {
        idx++;
        if (idx === len) {
            return (value === target) ? 1 : 0;
        } else {
            return recursive(value + numbers[idx], idx) + recursive(value - numbers[idx], idx);
        }
    }

    return recursive(numbers[0], 0) + recursive(numbers[0] * -1, 0);

}


function solution1(numbers, target) {
    const overVal = Math.floor((numbers.reduce((acc, curr) => acc + curr, 0) - target) / 2);
    let length = numbers.length;

    function recursive(target, idx, cnt) {
        for (let i = idx; i < length; i++) {
            let tmp = target;
            tmp -= numbers[i];
            if (tmp === 0) {
                cnt += 1;
            } else if (tmp > 0) {
                cnt += recursive(tmp, i + 1, 0);
            } else if (tmp < 0) {
                continue;
            }
        }
        return cnt;
    }
    return recursive(overVal, 0, 0);
}

function solution_old(numbers, target) {
    let answer = 0;

    // const queue = [{ value: numbers[0], idx: 0 }, { value: numbers[0] * -1, idx: 0 }];
    const queue = [[numbers[0], 0], [numbers[0] * -1, 0]];

    while (queue.length > 0) {
        let data = queue.shift();
        const value = data[0];
        let idx = data[1];
        // console.log(`value: ${value}, idx: ${idx}`);
        idx += 1;
        // if (idx > numbers.length) break;

        if (idx === numbers.length) {
            if (target === value) {
                answer++;
            }
        } else {
            queue.push([value + numbers[idx], idx]);
            queue.push([value - numbers[idx], idx]);
        }
    }

    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));