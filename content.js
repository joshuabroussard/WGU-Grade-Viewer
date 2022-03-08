window.addEventListener("load", main, false);


function main(evt) {
    let scores = 0;
    var timer = setInterval(runsOnJSLoadFinish, 111);
    function runsOnJSLoadFinish () {
        scores = document.getElementsByClassName("grid margin--bottom--20 padding--left--15 padding--right--15")
        if (scores.length != 0) {
            clearInterval(timer);
            for(let i = 0; i < scores.length; i++) {
                placeScore(scores[i])
            }
        }
    }

}

function placeScore(score) {
    // within the given score element find the span with class "margin--left--5" and find with width of the div with class "assessment__progress-bar__progress assessment__progress-bar__progress_-exemplary"
    const span = score.getElementsByClassName("margin--left--5");
    const width = score.getElementsByClassName("assessment__progress-bar__progress assessment__progress-bar__progress")[0].style.width;
    span[0].innerHTML = span[0].innerHTML + " " + width;
}