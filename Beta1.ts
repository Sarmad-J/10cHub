const now = new Date();

const tom = new Date();
tom.setDate(tom.getDate() + 1);

const today = document.getElementById("HeadingDayH");
const tommorow = document.getElementById("HeadingDayM");

today.textContent = "Heute, den " + now.toLocaleDateString();
tommorow.textContent = "Morgen, den " + tom.toLocaleDateString();