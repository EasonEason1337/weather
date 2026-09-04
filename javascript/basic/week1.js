function classifyRisk(score) {
  if (score < 3) {
    console.log("Low risk");
  } else if (score >= 3 && score < 7) {
    console.log("Medium risk");
  } else {
    console.log("High risk");
  }
}

function summariseScores(scores) {
  total = 0;
  for (i = 0; i < scores.length - 1; i++) {
    total += scores[i];
  }
  average = total / scores.length;
  return [Math.max(...scores), average, Math.min(...scores)];
}

let scores = [1, 2, 3, 4, 5];
console.log(summariseScores(scores));
