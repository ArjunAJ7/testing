function Submitted() {
  var x = document.getElementById("one");
  var y = x.options[x.selectedIndex].value;
  if (y == "No") {
    alert("Beware!!! They are watching you!");
  } else alert("Don't!");
}

function Enter() {
  document.getElementById("butt").innerHTML = "Are you Sure?";
  document.getElementById("trust").style.color = "black";
  document.getElementById("trust").style.fontWeight = "900";

  var x = document.getElementById("one");
  var y = x.options[x.selectedIndex].value;
  if (y == "No") {
    document.getElementById("traffic").style.backgroundColor =
      "rgba(255, 0, 0, 0.2)";
    document.getElementById("butt").innerHTML = "Are you Sure?";
  } else {
    document.getElementById("traffic").style.backgroundColor =
      "rgba(0, 255, 0, 0.2)";
    document.getElementById("butt").innerHTML = "Seriously?";
  }
}
function Leave() {
  document.getElementById("butt").innerHTML = "Submit";
  document.getElementById("trust").style.color = " rgb(143, 191, 229)";
  document.getElementById("trust").style.fontWeight = "normal";

  var x = document.getElementById("one");
  var y = x.options[x.selectedIndex].value;

  document.getElementById("traffic").style.backgroundColor = "transparent";
}
