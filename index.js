var clicks = 0;

function initiateClicks() {
    var clickStr = localStorage.getItem("clicks");
    if(clickStr == undefined){
        localStorage.setItem("clicks", 0);
        clicks = 0;
    }else{
        clicks = parseInt(clickStr);   
    }
    document.getElementById("compteur").innerHTML = clicks;
}

function doClick() {
    clicks += 1;
    localStorage.setItem("clicks", clicks);
    document.getElementById("compteur").innerHTML = clicks;
}

function enleverClick() {
  clicks -= 1;
  localStorage.setItem("clicks", clicks);
  document.getElementById("compteur").innerHTML = clicks;
}

function remiseZero() {
  clicks = 0;
  localStorage.setItem("clicks", clicks);
  document.getElementById("compteur").innerHTML = clicks;
}

document.getElementById("boutonIncr").onclick = doClick;

document.getElementById("enleverMoinsUn").onclick = enleverClick;

document.getElementById("remiseAZero").onclick = remiseZero;
initiateClicks();