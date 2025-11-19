const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let d of departments) {
    let score = d[1];
    if (score >= 90) console.log(d[0], "Excellent");
    else if (score >= 75) console.log(d[0], "Good");
    else if (score >= 60) console.log(d[0], "Average");
    else console.log(d[0], "Needs Improvement");
}
