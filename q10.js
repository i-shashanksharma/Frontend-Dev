class FitnessAnalytics {
  constructor(data) {
    if (!data.length) throw new Error("Dataset empty");
    this.data = data;
  }
  getActiveUsers() {
    return this.data.filter(d => d.steps > 7000);
  }
  getAverageCalories() {
    return (
      this.data.reduce((sum, d) => sum + d.calories, 0) / this.data.length
    );
  }
  getUserSummary() {
    return this.data.map(d => d.user + ": " + d.steps + " steps, " + d.calories + " cal");
  }
}

const data = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

const fa = new FitnessAnalytics(data);
console.log(fa.getActiveUsers());
console.log(fa.getAverageCalories());
console.log(fa.getUserSummary());