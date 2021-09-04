//switch
var switchButton = document.querySelector('.switch input');
var text = document.querySelector('header > h1');
var bodyBackground = document.querySelector('body');
switchButton.addEventListener('change', function(e){
  if(switchButton.checked === true){
    bodyBackground.classList.add("barcelona");
    bodyBackground.classList.remove("amsterdam");
    text.innerHTML = "Barcelona";
  } else {
    bodyBackground.classList.remove("barcelona");
    bodyBackground.classList.add("amsterdam");
    text.innerHTML = "Amsterdam";

  }
})