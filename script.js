startTest.addEventListener("click", askQuestions);


function askQuestions(){
    timer()
window.open("#")

 }
// Timer using a progress bar instead
 function timer(){
    var timeleft = 60;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
      }
      document.getElementById("progressBar").value = 60 - timeleft;
      timeleft -= 1;
    }, 1000);    
}

function startTest(){
  if (startTest = "click" ){
      window.open("http://127.0.0.1:5500/assets/asset2/index.html")
      window.close("http://127.0.0.1:5500/index.html")
  }

}