const marks = [88, 76, 91, 84, 79];

const hasFailed = marks.some(m => m < 35);
if (hasFailed) {
  console.log("Detained (failed in a subject).");
} else {
  const total = marks.reduce((a, b) => a + b, 0);
  const average = total / marks.length;
  const percentage = average;

  if (percentage >= 85) {
    console.log("Promoted with Distinction");
  } else if (percentage >= 50) {
    console.log("Promoted");
  } else {
    console.log("Detained");
  }

  console.log(`Average: ${average.toFixed(2)}%`);
  console.log(`Percentage: ${percentage.toFixed(2)}%`);
}
