// Fetch the JSON data
fetch('data.json')
.then(response => response.json())
.then(data => {
    // Process and display the data
    displayData(data);
    logData(data);
})
.catch(error => console.error('Error loading JSON:', error));


// Function to filter and display data
function filterData() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const isStudentChecked = document.getElementById('student-status').checked;
        const filteredData = isStudentChecked ? data.filter(item => item.isStudent) : data;
        
        updateDisplay(filteredData);
    })
    .catch(error => console.error('Error:', error));
}

// Function to reset view and display all data
function resetView() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        updateDisplay(data);
    })
    .catch(error => console.error('Error:', error));
}

// Function to update display with given data
function updateDisplay(data) {
    const displayElement = document.getElementById('data-display');
    displayElement.innerHTML = ''; // Clear existing data

    data.forEach(item => {
        let paragraph = document.createElement('p');
        paragraph.textContent = describeData(item);
        displayElement.appendChild(paragraph);
    });
}

// Function to display data in the browser
function displayData(data) {
    const displayElement = document.getElementById('data-display');
    data.forEach(item => {
        let paragraph = document.createElement('p');
        paragraph.textContent = describeData(item);
        displayElement.appendChild(paragraph);
    });
}

// Function to log data to the console
function logData(data) {
    data.forEach(item => {
        console.log(describeData(item));
    });
}

// Function to create a description string from a data item
function describeData(item) {
    return `ID: ${item.id}, Name: ${item.name}, Age: ${item.age}, Hobbies: ${item.hobbies.join(', ')}, City: ${item.address.city}`;
}
