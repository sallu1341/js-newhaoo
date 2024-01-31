function change() {
  var sidenav = document.getElementById("sidenavbar");

  var topnav = document.getElementById("topnav");
  var section = document.getElementById("section");
  var width = sidenav.style.width;

  if (width == "0px") {
    sidenav.style.width = "250px";
    sidenav.style.transition = "0.3s";
    topnav.style.left = "250px";
    topnav.style.width = "100%";
    topnav.style.transition = "0.3s";
    section.style.marginLeft = "250px";
    section.style.width = "100%";
    section.style.transition = "0.3s";
  } else {
    sidenav.style.width = "0px";

    sidenav.style.transition = "0.3s";
    topnav.style.left = "0px";
    topnav.style.width = "100%";
    topnav.style.transition = "0.3s";
    section.style.marginLeft = "0px";
    section.style.width = "100%";
    section.style.transition = "0.3s";
  }
}
function setion(activebtn, inactivebtn, active, inactive) {
  var active = document.getElementById(active);
  var inactive = document.getElementById(inactive);
  var activebtn = document.getElementById(activebtn);
  var inactivebtn = document.getElementById(inactivebtn);

  activebtn.style.background = "darkorange";
  activebtn.style.color = "white";
  inactivebtn.style.background = "white";
  inactivebtn.style.color = "black";
  active.style.display = "block";

  inactive.style.display = "none";
}
