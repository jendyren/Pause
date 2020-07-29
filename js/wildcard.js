var x = 0;
var array = Array();
var randomItem = array[Math.floor(Math.random()*array.length)];

document.querySelector('#wildtextsubmit').addEventListener('click', function(event) {
  event.preventDefault();
  array[x] = document.getElementById("wildtextinput").value;
//  alert("Element: " + array[x] + " Added at index " + x);
 x++;
 document.getElementById("wildtextinput").value = "";
 localStorage.setItem("wildcards", JSON.stringify(array));
 console.log(array);
});








