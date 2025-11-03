// AP-1 --

// scoresClump

// Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores that differ from each other by at most 2, such as with {3, 4, 5} or {3, 5, 5}.

// Examples

//     scoresClump([3, 4, 5]) → true
//     scoresClump([3, 4, 6]) → false
//     scoresClump([1, 3, 5, 5]) → true

function scoresClump(scores) {
  for (let i = 0; i < scores.length - 2; i++) {
    let min = Math.min(scores[i], scores[i + 1], scores[i + 2]);
    let max = Math.max(scores[i], scores[i + 1], scores[i + 2]);
    if (max - min <= 2) return true;
  }
  return false;
}
