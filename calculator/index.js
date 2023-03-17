var buttons = document.getElementById("buttons");
var li = buttons.querySelectorAll(".grid-item");
var result = document.getElementById("result");

for (let i = 0; i < li.length; i++) {
    console.log(i)
    
    li[i].addEventListener("click", function() {
        console.log(this.innerHTML)
        if (this.innerHTML == "=") {
            result.innerHTML = eval(result.innerHTML);
        } else {
            if (this.innerHTML == "%") {
                result.innerHTML += "/";
            } else if (this.innerHTML == "x") {
                result.innerHTML += "*";
            } else if (this.innerHTML == 'C') {
                result.innerHTML = "";
            } else {
                result.innerHTML += this.innerHTML;
            }
        }
    });
}