AOS.init();

//changes background color of menu while scrolling
window.onscroll = function() {changeColor()};

function changeColor() {
    var line = document.body.querySelectorAll(".line");
    var links = document.querySelectorAll(".link");

  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    for(var i = 0; i < line.length; i++){
        line[i].style.backgroundColor = "black";
    }

    for(var x = 0; x < links.length; x++){
      links[x].style.color = "black";
    }
  }else{
    for(var i = 0; i < line.length; i++){
        line[i].style.backgroundColor = "white";
    }

    for(var x = 0; x < links.length; x++){
      links[x].style.color = "white";
    }
  }
}

function openMenu(){
  var links = document.body.querySelector(".links");
  if(links.style.display === "block"){
    links.style.display = "none";
  }else{
    links.style.display = "block";
  }
}