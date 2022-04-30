/**
 * 2016년
 * https://programmers.co.kr/learn/courses/30/lessons/12901
 * 2022-04-30
 */


// 내 풀이
function solution(a, b) {
    const weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const accDaysOfMonth = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
    const value = ((accDaysOfMonth[a - 1] + b) % 7) - 1;
    const idx = value < 0 ? 6 : value;
    return weeks[idx];
}

solution();

// 다른사람풀이
function getDayName(a, b) {
    var date = new Date(2016, (a - 1), b);
    return date.toString().slice(0, 3).toUpperCase();
}

