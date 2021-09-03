//switch
var switchButton = document.querySelector('.switch input');
var bodyBackground = document.querySelector('section');
switchButton.addEventListener('change', function(e){
  if(switchButton.checked === true){
    bodyBackground.classList.add("barcelona");
    bodyBackground.classList.remove("amsterdam");
    document.querySelector('.city-images .amsterdam').style.display = "none";
    document.querySelector('.city-images .barcelona').style.display = "block";
  } else {
    bodyBackground.classList.remove("barcelona");
    bodyBackground.classList.add("amsterdam");
    document.querySelector('.city-images .amsterdam').style.display = "block";
    document.querySelector('.city-images .barcelona').style.display = "none";
  }
})