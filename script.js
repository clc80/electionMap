var totalWinner = null;

//Factory Function
var createPolitician = function(name, color){
  
  //Politician object
  var politician = {};

  //Politician properties
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = color;
  
  //method for adding up the number of votes
  politician.numberOfVotes = function(){
    for(i = 0; i < this.electionResults.length; i++){
        this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  
  //return the politician
  return politician;
};
//Method for setting the state results
  var setStateResults = function(state){
    theStates[state].winner = null;
    
    if(politician1.electionResults[state] > politician2.electionResults[state]){
      theStates[state].winner = politician1;
    }
    else if(politician1.electionResults[state] < politician2.electionResults[state]){
      theStates[state].winner = politician2;
    }
    
    //Change the color on the map
    var stateWinner = theStates[state].winner;
    
    if (stateWinner !== null){
        theStates[state].rgbColor = stateWinner.partyColor;
    }
    else{
        theStates[state].rgbColor = [0,51,153];
    }
    
    //Fill in the dynamic table at the bottom
var stateResultsJS = document.getElementById("stateResults");

//Variables for each position
var header = stateResultsJS.children[0].children[0];
var stateName = header.children[0];
var Abbrev = header.children[1];
var tablePolitician1 = stateResultsJS.children[1].children[0];
var politician1Name = tablePolitician1.children[0];
var politician1Results = tablePolitician1.children[1];
var tablePolitician2 = stateResultsJS.children[1].children[1];
var politician2Name = tablePolitician2.children[0];
var politician2Results = tablePolitician2.children[1];
var tableWinner = stateResultsJS.children[1].children[2];
var tableWinnerName = tableWinner.children[1];

//Assign each cell
stateName.innerText = theStates[state].nameFull;
Abbrev.inetText = "(" + theStates[state].nameAbbrev + ")"; 
politician1Name.innerText = politician1.name;
politician1Results.innerText = politician1.electionResults[state];
politician2Name.innerText = politician2.name;
politician2Results.innerText = politician2.electionResults[state];

if (theStates[state].winner === null){
    tableWinnerName.innerText = "DRAW";
} else {
    tableWinnerName.innerText = theStates[state].winner.name;
}
  };

var politician1 = createPolitician("Bob Dingleberg", [132,17,11]);
var politician2 = createPolitician("Margaret Fausting", [245,141,136]);

//Add the election results to each candidate
politician1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
politician2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//Call the function
  politician1.numberOfVotes();
  politician2.numberOfVotes();

//Find the Winner
if (politician1.totalVotes > politician2.totalVotes){
  totalWinner = politician1;
}
else if(politician1.totalVotes < politician2.totalVotes){
  totalWinner = politician2;
}
else{
  totalWinner = "Draw";
}

console.log(totalWinner.name + " is the winner, and their color is " + totalWinner.partyColor);

//Fill in the top table
var countryResultsJS = document.getElementById("countryResults");

countryResultsJS.children[0].children[0].children[0].innerText = politician1.name;
countryResultsJS.children[0].children[0].children[1].innerText = politician1.totalVotes;
countryResultsJS.children[0].children[0].children[2].innerText = politician2.name;
countryResultsJS.children[0].children[0].children[3].innerText = politician2.totalVotes;
countryResultsJS.children[0].children[0].children[5].innerText = totalWinner.name;
                                      
