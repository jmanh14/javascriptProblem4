let arrayCount = prompt("How many elements?");
let numArray = [arrayCount];
arrayAnalyzer(numArray, arrayCount);

function arrayAnalyzer(numArray, arrayCount){
    posCount = 0;
    negSum = 0;

    for(let i = 0; i < arrayCount; i++){
        let element = parseInt(prompt("Element: " + i));
        numArray[i] = element;
        if(element >= 0){
            posCount++;
        } 
        else if(element < 0){
            negSum += element;
        }
    }
    console.log(numArray);
    console.log("["+posCount+","+negSum+"]");
}