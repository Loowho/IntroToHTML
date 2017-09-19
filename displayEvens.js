function validateEntries() {
    var startNum = Number(document.forms["displayEvens"]["startNum"].value);
    var endNum = Number(document.forms["displayEvens"]["endNum"].value);
    var stepNum = Number(document.forms["displayEvens"]["stepNum"].value);
    if (!startNum || isNaN(startNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["displayEvens"]["startNum"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["startNum"].focus();
        console.log("We are here");
        return false;
    }
   if (!endNum || isNaN(endNum)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["displayEvens"]["endNum"]
          .parentElement.className = "form-group has-error"
       document.forms["displayEvens"]["endNum"].focus();
       return false;
   }
   if (!stepNum || isNaN(stepNum)) {
    alert("Step must be filled in with a number.");
    document.forms["displayEvens"]["stepNum"]
       .parentElement.className = "form-group has-error"
    document.forms["displayEvens"]["stepNum"].focus();
    return false;
    }
    if(endNum <= startNum) {
     alert("Ending Number can't be less than Starting Number.");
     document.forms["displayEvns"]["endNum"]
        .parentElement.className = "form-group has-error";
     document.forms["displayEvens"]["endNum"].focus();
    return false;
    }
    if(stepNum < 0) {
     alert("Step must be a positive number.");
     document.forms["displayEvens"]["stepNum"]
        .parentElement.className = "form-group has-error"
     document.forms["displayEvens"]["stepNum"].focus();
    return false;
    }
    var list = [];
    var evenNumbers = [];
    var results = "";
    for (var i = startNum; i <= endNum; i++) {
        list.push(i);
        }
    for(var i = 0; i <= list.length; i += stepNum) {
        if(list[i]%2 == 0) {
            evenNumbers.push(list[i]);
        }
    }
        results = "<br />" + "Here are the even numbers between " + startNum + " and " + endNum + " by " + stepNum + "'s " + "<br />" + evenNumbers;
        document.getElementById("resultDiv").innerHTML = results;
}

