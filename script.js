// 1st iteration: acc [] + arr [0, 1] = [0, 1]
// 2nd iteration: acc [0, 1] + [2, 3] = [0, 1, 2, 3]
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (acc,arr) => {
        return acc.concat(arr);
        },
    [])
console.log(flattened)