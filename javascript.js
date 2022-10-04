
// Source: https://parade.com/1039985/marynliles/pick-up-lines/
var pickUpLineList = [
    "I hope you know CPR, because you just took my breath away!",
    "So, aside from taking my breath away, what do you do for a living?",
    "I ought to complain to Spotify for you not being named this week’s hottest single.",
    "Are you a parking ticket? ‘Cause you’ve got ‘fine’ written all over you.",
    "Your eyes are like the ocean; I could swim in them all day.",
    "When I look in your eyes, I see a very kind soul.",
    "If you were a vegetable, you’d be a ‘cute-cumber.’",
    "Do you happen to have a Band-Aid? ‘Cause I scraped my knees falling for you.",
    "I never believed in love at first sight, but that was before I saw you.",
    " I didn’t know what I wanted in a woman until I saw you."
]
 
function getJoke() {
    var pickUpLine = pickUpLineList[Math.floor(Math.random()*pickUpLineList.length)];
    document.getElementById('joke').innerHTML = pickUpLine;
}