document.addEventListener("DOMContentLoaded", () => {  // DOMContentLoaded, occurs when the initial HTML document content has loaded
    var form = document.getElementById("dataForm");     // reference form element with the ID "dataForm"
    var dataTableBody = document.getElementById("dataTableBody");  //reference the table body element where data rows will be added


    form.addEventListener("submit", (event) => {      //add a "submit" event listener to the form
      event.preventDefault();                        // prevent the default from submission behavior, that would cause a page reload


      var nameInput = document.getElementById("name");  // how to get references to the input fields name and age
      var ageInput = document.getElementById("age");


      var name = nameInput.value;        // how you retrieve the values entered in the input fields
      var age = ageInput.value;


      if (name && age) {    // this is used to check if both name and age have valid values (not empty)
        var newRow = document.createElement("tr");  // creates a new table row element
        newRow.innerHTML = `
          <td>${name}</td>
          <td>${age}</td>
        `;
        dataTableBody.appendChild(newRow); // append the new row to the table body, adds a new data row 


        // Clear form inputs fields to prepare foe the next entry
        nameInput.value = "";
        ageInput.value = "";
      }
    });
  });
