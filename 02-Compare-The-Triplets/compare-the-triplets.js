function compareTriplets(a, b) {
    const resultArr = [0,0];
    a.map((value, index) => {
        if (value > b[index]) {
            resultArr[0]++;
        }
        if (value < b[index]) {
            resultArr[1]++;
        }
    });

    return resultArr;
}
