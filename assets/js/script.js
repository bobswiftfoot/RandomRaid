var startButton = document.querySelector('#startQuiz');
var startScreen = document.querySelector('#startScreen');
var questionsScreen = document.querySelector('#questionsScreen');
var resultsScreen = document.querySelector('#resultsScreen');
var resultSection = document.querySelector('#resultSection');

var members = [ {m:"Steale",    j:["PLD", "WAR", "DRK", "GNB", "RPR"]}, 
                {m:"Bellamy",   j:["WAR", "DRK", "GNB", "MNK", "WHM", "SCH", "AST", "SGE", "MCH", "DNC", "SMN"]}, 
                {m:"Berry",     j:["GNB", "DRG", "RPR", "WHM", "SCH", "SGE", "BRD", "SMN", ]}, 
                {m:"Maika",     j:["WAR", "SAM", "RPR", "WHM", "SCH", "AST", "SGE", "BRD", "MCH", "DNC", "BLM", "SMN", "RDM"]}, 
                {m:"Mari",      j:["PLD", "GNB", "DRG", "SAM", "RPR", "WHM", "SCH", "AST", "SGE", "BRD", "MCH", "DNC", "BLM", "SMN", "RDM"]}, 
                {m:"Naia",      j:["PLD", "WAR", "DRK", "GNB", "MNK", "DRG", "NIN", "SAM", "RPR", "WHM", "SCH", "AST", "SGE", "BRD", "MCH", "DNC", "BLM", "SMN", "RDM"]}, 
                {m:"Solelle",   j:["GNB", "RPR", "SCH","DNC", "SMN"]}, 
                {m:"Reina",     j:["WAR", "DRG", "NIN", "SAM", "RPR","BLM"]}];

function initilize()
{
    startButton.addEventListener('click', startGame);
    questionsScreen.querySelector("#random1").addEventListener('click', randomJob);
    questionsScreen.querySelector("#random2").addEventListener('click', randomJob);
    questionsScreen.querySelector("#random3").addEventListener('click', randomJob);
    questionsScreen.querySelector("#random4").addEventListener('click', randomJob);
    questionsScreen.querySelector("#random5").addEventListener('click', randomJob);
    questionsScreen.querySelector("#random6").addEventListener('click', randomJob);
    questionsScreen.querySelector("#random7").addEventListener('click', randomJob);
    questionsScreen.querySelector("#random8").addEventListener('click', randomJob);
}

function startGame()
{
    shuffle(members);
    console.log(members);
    questionsScreen.querySelector("#random1").textContent = members[0].m;
    questionsScreen.querySelector("#random2").textContent = members[1].m;
    questionsScreen.querySelector("#random3").textContent = members[2].m;
    questionsScreen.querySelector("#random4").textContent = members[3].m;
    questionsScreen.querySelector("#random5").textContent = members[4].m;
    questionsScreen.querySelector("#random6").textContent = members[5].m;
    questionsScreen.querySelector("#random7").textContent = members[6].m;
    questionsScreen.querySelector("#random8").textContent = members[7].m;
}

function randomJob(e)
{
    console.log(e);
    var memberNum = e.target.value;
    shuffle(members[memberNum].j);
    e.target.parentElement.children[1].textContent =members[memberNum].j[0];
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

initilize();