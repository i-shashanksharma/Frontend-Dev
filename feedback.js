let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ").length;
let bad = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log("Words:", words);
if (!bad) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
