const username = "Shashank";
const age = 26;
const isMember = true;
const favoriteBooks = ["JS Guide", "DSA"];
const profile = { city: "Delhi", id: 101 };
const previousAddress = null;
let phoneNumber;

const report = [
  { label: "username", value: username, type: typeof username, isArray: Array.isArray(username) },
  { label: "age", value: age, type: typeof age, isArray: Array.isArray(age) },
  { label: "isMember", value: isMember, type: typeof isMember, isArray: Array.isArray(isMember) },
  { label: "favoriteBooks", value: favoriteBooks, type: typeof favoriteBooks, isArray: Array.isArray(favoriteBooks) },
  { label: "profile", value: profile, type: typeof profile, isArray: Array.isArray(profile) },
  { label: "previousAddress", value: previousAddress, type: typeof previousAddress, isArray: Array.isArray(previousAddress) },
  { label: "phoneNumber", value: phoneNumber, type: typeof phoneNumber, isArray: Array.isArray(phoneNumber) }
];

console.table(report);
