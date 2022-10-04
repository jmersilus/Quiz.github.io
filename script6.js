document.getElementById("#wrong1")
wrong1.addEventListener("click", wrongAnwser);

document.getElementById("#wrong2")
wrong2.addEventListener("click", wrongAnwser);

document.getElementById("#wrong3")
wrong3.addEventListener("click", wrongAnwser);

document.getElementById("#right")
right.addEventListener("click", rightAnwser);

function wrongAnwser(){
    window.alert("wrong")
    if (wrongAnwser = "click" ){
        window.alert("Try again")
    }
}

function rightAnwser(){
    window.alert("right")
    if (rightAnwser = "click" ){
        window.open("http://127.0.0.1:5500/Quiz.github.io/indexHS.html")
        window.close("http://127.0.0.1:5500/Quiz.github.io/index6.html")
    }

}