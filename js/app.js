var WORKPAGE = 4;

var cntr = 0;
var wordlist = Object.keys(words);
var curpg = words[wordlist[0]];
var max = Object.keys(words).length;

function NextWord() {
    var idx = cntr;
    cntr = (cntr + 1) % max;
    console.log("Index: ", cntr);
    var lvl = words[idx];
    if ( lvl > WORKPAGE ) {
        // Autowrap
        return NextWord();
    }
    var word = wordlist[idx];
    var wordbox = document.getElementById("wordbox");
    wordbox.innerHTML = word;

    update_metrics();
}

function init() {
    document.getElementById("wordbox").innerHTML = wordlist[cntr++];
    update_metrics();
}

function update_metrics() {
    var curpg = words[wordlist[cntr]];
    document.getElementById("workpage_view").innerHTML = curpg;
}


function rand_num() {
    return Math.floor(Math.random() * 100);
}

function RandomWord() {
    cntr = rand_num() % max;
    NextWord();
}
