let testArr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
    let posNum = 0;
    let negNum = 0;
    let zeroSum = 0;

    arr.forEach(value => {
        (value === 0) ? zeroSum++ : (value > 0) ? posNum++ : negNum++;
    });

    const arrLength = arr.length;
    console.log(calcFraction(posNum, arrLength));
    console.log(calcFraction(negNum, arrLength));
    console.log(calcFraction(zeroSum, arrLength));
}

const calcFraction = (num, length) => (num / length).toFixed(6);