window.addEventListener("load", main, false);


function main(evt) {
    let scores = 0;
    var timer = setInterval(runsOnJSLoadFinish, 111);
    function runsOnJSLoadFinish () {
        scores = document.getElementsByClassName("score-bar");
        if (scores.length != 0) {
            clearInterval(timer);
            for(let i = 0; i < scores.length; i++) {
                placeScore(scores[i])
            }
        }
    }

}

function placeScore(parent) {
    // within the given score element find the span with class "margin--left--5" and find with width of the div with class 
    // "assessment__progress-bar__progress assessment__progress-bar__progress"
    console.log(parent)

    let right = parent.getElementsByClassName("value")[0].style.right;
    //parse the % out of the string
    let percent = parseInt(right.substring(0, right.length - 1));

    //add the score value into the parent container
    currentHtml = parent.innerHTML;
    // span should be 2 rem font size
    parent.innerHTML = `<span style='font-size:2rem'>${100-Number(percent)}%</span>`+ currentHtml;

}