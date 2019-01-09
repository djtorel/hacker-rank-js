function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let lineStr = '';
        for (let j = 0; j < n - i; j++) {
            lineStr += ' ';
        }
        for (let k = 0; k < i; k++) {
            lineStr += '#';
        }
        console.log(lineStr);
    }
}