//Title: Lab 10 Events and forms
//Author: Brandon Vindel <bvindelf@ucsc.edu>
//Date: May 15, 2023

function sortUserName(userName) {
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

var button = document.getElementById('my-button');
button.addEventListener('click', function() {
  inputValue = document.getElementById('user-name').value;
  var sortedName = sortUserName(inputValue);
  document.getElementById("output").innerHTML = sortedName;
});