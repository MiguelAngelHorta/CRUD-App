function validateForm() {
    var mainID = document.getElementById("mainID").value;
    var mainDescription = document.getElementById("mainDescription").value;
    var domain = document.getElementById("domain").value;
    var scope = document.getElementById("scope").value;

    if (mainID == "") {
        alert("ID is required");
        return false;
    }

    if (mainDescription == "") {
        alert("Control Description is required");
        return false;
    }

    if (domain == "") {
        alert("Domain is required");
        return false;
    }

    if (scope == "") {
        alert("Scope is required");
        return false;
    }

    return true;
}

function showData() {
  var controlList;

  if (localStorage.getItem("controlList") == null) {
    controlList = [{
      mainID: "0001",
      mainDescription: "Default Control 1: Implement access controls to ensure that only authorized individuals or systems have access to resources, data, and systems.",
      domain: "Identity and Access Management (IAM)",
      scope: "Yes",
    },
    {
      mainID: "0002",
      mainDescription: "Default Control 2: Regularly apply patches and updates to software, operating systems, and applications to address known vulnerabilities and reduce the risk of exploitation.",
      domain: "Security Architecture and Engineering",
      scope: "Yes",
    },
    {
      mainID: "0003",
      mainDescription: "Default Control 3: Enforce a blockchain-based immutable audit trail for all financial transactions.",
      domain: "Security Operations",
      scope: "No",
    },
    // Add more default data as needed
  ];
  localStorage.setItem("controlList", JSON.stringify(controlList));

  } else {
    controlList = JSON.parse(localStorage.getItem("controlList"));
  }

  var html = "";

  controlList.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.mainID + "</td>";
    html += "<td>" + element.mainDescription + "</td>";
    html += "<td>" + element.domain + "</td>";
    html += "<td>" + element.scope + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger btn-sm">Delete</button><button onclick="updateData(' +
      index +
      ')" class="btn btn-warning btn-sm m-2">Edit</button></td>';
    html += "</tr>";
  });

  document.querySelector("#crudTable tbody").innerHTML = html;
}

// Use 'window.onload' instead of 'document.onload'
window.addEventListener("load", showData);

function AddData() {
    if (validateForm()) {
      var mainID = document.getElementById("mainID").value;
      var mainDescription = document.getElementById("mainDescription").value;
      var domain = document.getElementById("domain").value;
      var scope = document.getElementById("scope").value;
  
      var controlList;
  
      if (localStorage.getItem("controlList") == null) {
        controlList = [];
      } else {
        controlList = JSON.parse(localStorage.getItem("controlList"));
      }
  
      // Check for duplicate mainID (optional, consider server-side validation for critical applications)
      var isDuplicate = false;
      for (var i = 0; i < controlList.length; i++) {
        if (controlList[i].mainID === mainID) {
          isDuplicate = true;
          break;
        }
      }
  
      if (isDuplicate) {
        alert("Error: Main Control ID already exists. Please enter a unique ID.");
      } else {
        controlList.push({
          mainID: mainID,
          mainDescription: mainDescription,
          domain: domain,
          scope: scope,
        });
  
        localStorage.setItem("controlList", JSON.stringify(controlList));
        showData();
  
        // Clear form data after successful submission
        document.getElementById("mainID").value = "";
        document.getElementById("mainDescription").value = "";
        document.getElementById("domain").value = "";
        document.getElementById("scope").value = "";

        // Display the success alert
        alert("Control added successfully!");

      }
    }
  }
  

  function deleteData(index) {
    var controlList;

    if (localStorage.getItem("controlList") === null) {
        controlList = [];
    } else {
        controlList = JSON.parse(localStorage.getItem("controlList"));
    }

    // Confirm deletion before proceeding
    if (confirm("Are you sure you want to delete this control?")) {
        controlList.splice(index, 1);
        localStorage.setItem("controlList", JSON.stringify(controlList));
        showData();
    }
}

function updateData(index) {
    document.getElementById("Add Control").style.display = "none";
    document.getElementById("Update").style.display = "block";
  
    var highlightedRow = document.querySelector(".edit-highlight");
    if (highlightedRow) {
        highlightedRow.classList.remove("edit-highlight");
    }

    // Add highlight to the currently edited row
    var rows = document.querySelectorAll("#crudTable tbody tr");
    rows[index].classList.add("edit-highlight");

    // Select all delete buttons within the table body
    var deleteButtons = document.querySelectorAll("#crudTable tbody .btn-danger");
  
    // Disable all delete buttons
    deleteButtons.forEach(function (button) {
      button.disabled = true;
    });

    var controlList;
    if (localStorage.getItem("controlList") === null) {
        controlList = [];
    } else {
        controlList = JSON.parse(localStorage.getItem("controlList"));
    }

    document.getElementById("mainID").value = controlList[index].mainID;
    document.getElementById("mainDescription").value = controlList[index].mainDescription;
    document.getElementById("domain").value = controlList[index].domain;
    document.getElementById("scope").value = controlList[index].scope;

    document.getElementById("Update").onclick = function () {
        if (validateForm()) {
            controlList[index].mainID = document.getElementById("mainID").value;
            controlList[index].mainDescription = document.getElementById("mainDescription").value;
            controlList[index].domain = document.getElementById("domain").value;
            controlList[index].scope = document.getElementById("scope").value;

            localStorage.setItem("controlList", JSON.stringify(controlList));

            showData();

            document.getElementById("mainID").value = "";
            document.getElementById("mainDescription").value = "";
            document.getElementById("domain").value = "";
            document.getElementById("scope").value = "";

            document.getElementById("Add Control").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    };
}

function downloadCSV() {
    // Get the table element
    var table = document.getElementById("crudTable");
  
    // Create a string to hold the CSV data
    var csvData = "";
  
    // Extract headers from the <thead> element
    var headerRow = table.querySelector("thead tr");
    if (headerRow) {
      for (var i = 0; i < headerRow.cells.length; i++) {
        csvData += headerRow.cells[i].textContent + ",";
      }
      csvData += "\n"; // Add a newline after headers
    } else {
      console.warn("Warning: Table doesn't contain a header row.");
    }
  
    // Loop through all table rows within <tbody> and add data to CSV string
    var tableBody = table.querySelector("tbody");
    for (var i = 0; i < tableBody.rows.length; i++) {
      var row = tableBody.rows[i];
      for (var j = 0; j < row.cells.length; j++) {
        var cellData = row.cells[j].textContent;
        // Escape commas within cell data
        cellData = cellData.replace(/,/g, " ");
        csvData += cellData + ",";
      }
      csvData += "\n"; // Add newline after each row
    }

  // Create a Blob object with the CSV data
  var blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

  // Create a downloadable link
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = "Security_Control_Inventory.csv";
  link.click();

  // Release the object URL (optional)
  setTimeout(function() {
    URL.revokeObjectURL(link.href);
  }, 1000);
}
