// You should implement your task here.

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

module.exports = function towelSort(matrix) {
    if (matrix !== undefined) {
        let res = [];

        for (let i = 0; i <= matrix.length - 1; i++) {
            if (i % 2 !== 0) {
                for (let k = matrix[i].length - 1; k >= 0; k--) {
                    res.push(matrix[i][k]);
                }
            } else {
                for (let k = 0; k <= matrix[i].length - 1; k++) {
                    res.push(matrix[i][k]);
                }
            }
        }
        return res;
    }
    return [];
}



