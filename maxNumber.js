/** This works but seemed cumbersome. Found better way to get max number. See masNumber.html */
var finalNumber = numberList[0];
for (var i=0; i < numberList.length; i++) {
    console.log("numberList[i] is " + numberList[i]) 
    var maxNumber=Math.max(finalNumber, numberList[i]);
    console.log("maxNumber is " + maxNumber);
    if(maxNumber > finalNumber) {
        finalNumber = numberList[i];
        console.log("final number has been updated to " + finalNumber);
    }else {
        console.log(finalNumber + " is less than compareNumber");
    }
}
alert("Max number in the array is " + finalNumber);