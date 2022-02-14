function myFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "top-nav") {
      x.className += " responsive";
    } else {
      x.className = "top-nav";
    }
  }