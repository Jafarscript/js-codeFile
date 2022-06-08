const finalGrade = (a, b, c) => {
    let sum = a + b + c;
    let average = sum / 3;
    if (average >= 0 && average <= 59) {
        return 'F';
    } else if (average >= 60 && average <= 69) {
        return 'D';
    } else if (average >= 70 && average <= 79) {
        return 'C';
    } else if (average >= 80 && average <= 89) {
        return 'B';
    } else if (average >= 90 && average <= 100) {
        return 'A';
    }
    if ((a > 0 || a < 100) || (b > 0 || b < 100) || (c > 0 || c < 100)) {
        return true;
    } else {
        return 'You have entered an invalid grade.'
    };
}
console.log(finalGrade(75, 60, 90));