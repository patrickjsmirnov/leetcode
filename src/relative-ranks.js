/**
 * @param {number[]} score
 * @return {string[]}
 */

const findRelativeRanks = function (score) {
  const sortedScore = score.slice().sort((a, b) => b - a);
  const map = new Map();

  for (let i = 0; i < sortedScore.length; i++) {
    if (i === 0) {
      map.set(sortedScore[i], "Gold Medal");
    } else if (i === 1) {
      map.set(sortedScore[i], "Silver Medal");
    } else if (i === 2) {
      map.set(sortedScore[i], "Bronze Medal");
    } else {
      map.set(sortedScore[i], String(i + 1));
    }
  }

  return score.map((score) => map.get(score));
};

console.log(findRelativeRanks([5, 4, 3, 2, 1])); // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4])); // "Gold Medal","5","Bronze Medal","Silver Medal","4"]
