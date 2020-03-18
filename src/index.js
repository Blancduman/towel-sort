// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    return matrix.reduce(
        (result, item, index) =>
            index % 2 === 0
                ? [...result, ...item]
                : [...result, ...item.reverse()],
        []
    );
};
