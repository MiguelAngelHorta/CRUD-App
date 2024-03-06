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
    var peopleList;

    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.mainID + "</td>";
        html += "<td>" + element.mainDescription + "</td>";
        html += "<td>" + element.domain + "</td>";
        html += "<td>" + element.scope + "</td>";
        html +=
            '<td><button onclick="deleteData(' +
            index +
            ')" class="btn btn-danger">Delete</button><button onclick="editData(' +
            index +
            ')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData() {
    if (validateForm()) {
        var mainID = document.getElementById("mainID").value;
        var mainDescription = document.getElementById("mainDescription").value;
        var domain = document.getElementById("domain").value;
        var scope = document.getElementById("scope").value;

        var peopleList;

        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            mainID: mainID,
            mainDescription: mainDescription,
            domain: domain,
            scope: scope,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("mainID").value = "";
        document.getElementById("mainDescription").value = "";
        document.getElementById("domain").value = "";
        document.getElementById("scope").value = "";
    }
}

// function to delete data from local storage