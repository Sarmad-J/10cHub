var now = new Date();
var tom = new Date();
tom.setDate(tom.getDate() + 1);
var today = document.getElementById("HeadingDayH");
var tommorow = document.getElementById("HeadingDayM");
today.textContent = "Heute, den " + now.toLocaleDateString();
tommorow.textContent = "Morgen, den " + tom.toLocaleDateString();
//# sourceMappingURL=Beta1.js.map