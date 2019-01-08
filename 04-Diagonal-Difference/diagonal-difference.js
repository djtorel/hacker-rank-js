function diagonalDifference(arr) {
    let diagSum1 = 0;
    let diagSum2 = 0;
    arr.map((value, index) => {
        diagSum1 += value[index];
        diagSum2 += value[(arr.length - 1) - index];
    });

    return Math.abs(diagSum1 - diagSum2);
}

/* 
[
   0 [0, 1, 2],
   1 [0, 1, 2],
   2 [0, 1, 2]
];

0 [0, 1, 2, 3]
1 [0, 1, 2, 3]
2 [0, 1, 2, 3]
3 [0, 1, 2, 3]

arr[0][0]
arr[1][1]
arr[2][2]

arr[0][2]
arr[1][1]
arr[2][0]
 */