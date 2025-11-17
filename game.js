const secret = Math.floor(Math.random() * 50) + 1;
const userGuess = 27;

if (userGuess === secret) {
  console.log("Correct guess!");
} else {
  const diff = Math.abs(userGuess - secret);
  if (diff <= 3) {
    console.log("Very close!");
  } else if (userGuess > secret) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
