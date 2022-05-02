/**
 * 다음 큰숫자 
 * https://programmers.co.kr/learn/courses/30/lessons/12911
 * 2022-05-02
 */

function getOneCnt(num) {
    const decStr = num.toString(2);
    const decArr = decStr.match(/1/g);
    return decArr ? decArr.length : 0;
}

function solution(n) {
    const dap = getOneCnt(n);
    let x = n + 1;
    while (true) {
        if (dap === getOneCnt(x)) {
            return x;
        }
        x++;
    }
}

