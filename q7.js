function validateLogin(username, password) {
  const uReg = /^.{5,}$/;
  const pReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;

  return {
    userValid: uReg.test(username),
    passValid: pReg.test(password)
  };
}
console.log(validateLogin("shashank", "Pass@123"));