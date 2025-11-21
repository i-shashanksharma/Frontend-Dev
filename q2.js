function validateStudentForm(name, email, phone, password) {
  const nameReg = /^[A-Za-z ]+$/;
  const emailReg = /^[\w.-]+@[\w.-]+\.\w+$/;
  const phoneReg = /^\d{10}$/;
  const passReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{6,}$/;

  return {
    nameValid: nameReg.test(name),
    emailValid: emailReg.test(email),
    phoneValid: phoneReg.test(phone),
    passValid: passReg.test(password),
  };
}

console.log(validateStudentForm("Rahul", "rahul@mail.com", "9876543210", "Pass@123"));