// script.js

// Test that the JavaScript file is linked to the HTML file
console.log("JavaScript file linked successfully.");

// Read the file using the Fetch API
function readJSONFile() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log("JSON data:", data);
            displayJSONData(data);
        })
        .catch(error => console.error('Error reading JSON file:', error));
}

// Display one of the key-value pairs of data
function displayJSONData(data) {
    data.forEach(item => {
        console.log("Name:", item.name); // Displaying name for testing
    });
}

// Write a function to return strings of data describing the contents of the JSON file
function getDescription(data) {
    let description = "";
    data.forEach(item => {
        description += `Name: ${item.name}, Age: ${item.age}, City: ${item.city}, Is Student: ${item.isStudent ? "Yes" : "No"}<br>`;
    });
    return description;
}

// Write the results of the JSON file to the browser window as HTML
function writeToHTML(data) {
    const jsonDataDiv = document.getElementById('json-data');
    jsonDataDiv.innerHTML = getDescription(data);
}

// Call readJSONFile function when the page loads
document.addEventListener("DOMContentLoaded", function () {
    readJSONFile();
});