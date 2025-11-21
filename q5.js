function validate(name, email, seats) {
  const nameReg = /^[A-Za-z ]+$/;
  const emailReg = /^[\w.-]+@[\w.-]+\.\w+$/;
  const seatReg = /^[1-9]$|^10$/;

  if (!nameReg.test(name)) return "Invalid Name";
  if (!emailReg.test(email)) return "Invalid Email";
  if (!seatReg.test(seats)) return "Seats must be 1 to 10";
  return true;
}

function bookTicket(name, email, seats) {
  const check = validate(name, email, seats);

  if (check !== true) {
    console.log(check);
    return;
  }

  const booking = { name, email, seats };
  console.log("Ticket Booked:", booking);
}

bookTicket("Rahul", "rahul@mail.com", 4);