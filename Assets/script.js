function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

 function fun() {
        let inputPswd = document.getElementById("validate")
                                .value;
        let correctPswd = "2005Mcmillan";
        if (inputPswd === correctPswd) {
            window.open("noahcameron.html");
        } else {
            alert("Incorrect password!");
        }
    }