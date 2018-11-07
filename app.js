// Get references to the tbody element, input fields and buttons
let tbody = document.querySelector("tbody");
let dateInput = document.querySelector("#datetime");
let cityInput = document.querySelector("#city");
let stateInput = document.querySelector("#state");
let countryInput = document.querySelector("#country");
let shapeInput = document.querySelector("#shape");
let searchBtn = document.querySelector("#search");
let resetBtn = document.querySelector("#reset");

// Add an event listener to the buttons, call handle***ButtonClick when clicked
searchBtn.addEventListener("click", SearchClick);
resetBtn.addEventListener("click", ResetClick);

// Set filteredData to dataSet initially
let filteredData= data;

// renderTable renders the filtereDataSet to the tbody
function renderTable() {
  tbody.innerHTML = "";
  

  for (let i = 0; i < filteredData.length; i++) {
    // Get the current sighting object and its fields
    let data = filteredData[i];
    let fields = Object.keys(data);

    // Create a new row in the tbody, set the index to be i + startingIndex
    let row = tbody.insertRow(i);
    for (let j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      let field = fields[j];
      let cell = row.insertCell(j);
      cell.innerText = data[field];
    }
  }
  
}
// Render the table for the first time on page load
renderTable();

function ResetClick() {
   // Clearing the input fields
   dateInput.value = "";
   cityInput.value = "";
   stateInput.value = "";
   countryInput.value = "";
   shapeInput.value = "";
   commentsInput.value = "";
}
ResetClick();


// Search the existing UFO info
function SearchClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  let filterDatetime = dateInput.value.trim().toLowerCase();
  let filterCity = cityInput.value.trim().toLowerCase();
  let filterState = stateInput.value.trim().toLowerCase();
  let filterCountry = countryInput.value.trim().toLowerCase();
  
  
  
  // Set filteredDataSet to an array of all addresses whose "state" matches the filter
  filteredData = data.filter(function(data) {
    let dateDatetime = String(data.datetime).toLowerCase();
    let cityField = String(data.city).toLowerCase();
    let stateField = String(data.state).toLowerCase();
    let countryField = String(data.country).toLowerCase();
    
    

    let goodRecord = 
    (filterDatetime.length === 0 || dateDatetime === filterDatetime) &&
    (filterCity.length === 0 || cityField.includes(filterCity)) &&
    (filterState.length === 0 || stateField === filterState) &&
    (filterCountry.length === 0 || countryField.includes.includes( filterCountry) )
    
     
    
    return goodRecord;
  });
  
  renderTable();
  
}

