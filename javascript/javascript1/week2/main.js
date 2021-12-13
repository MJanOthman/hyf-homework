function getFullname(firstname, surname, formal, male) {
  let full = "";
  if (firstname == undefined || surname == undefined) {
    return "Please Enter your Fullname";
  } else if (formal) {
    if (male) {
      full = "Lord " + firstname + " " + surname;
    } else {
      full = "Lady " + firstname + " " + surname;
    }
  } else {
    full = firstname + " " + surname;
  }
  return full;
}
