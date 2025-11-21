let user = { name: "John", email: "john@mail.com", age: 21 };

function updateUser(name, email, age) {
  user.name = name;
  user.email = email;
  user.age = age;

  return user;
}
console.log(updateUser("Aman", "aman@mail.com", 25));