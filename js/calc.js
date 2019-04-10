var sum = "";
//Change display
var disp = document.getElementById("screen");

var numbers = document.querySelectorAll(".buttonNum");
for(var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function ()  {
    console.log(this.innerHTML);
    disp.innerHTML = this.innerHTML; //changes calculator display
    sum += this.innerHTML;

  });
}

var calc = document.querySelectorAll(".operator");
  for (var i = 0; i < calc.length; i++) {
    calc[i].addEventListener("click", function () {
      console.log(this.innerHTML);
      calc = this.innerHTML;
      disp.innerHTML = this.innerHTML;
      sum += this.innerHTML;
    });
  }


var eq = document.querySelectorAll(".equals")[0];
  eq.addEventListener("click", function () {
    var result = eval(sum);
    disp.innerHTML = result;
  })


var clear = document.querySelectorAll(".buttonClear")[0];
  clear.addEventListener("click", function (){
  disp.innerHTML = " ";
});
