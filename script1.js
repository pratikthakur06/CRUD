var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["ID"] = document.getElementById("ID").value;
    formData["name"] = document.getElementById("name").value;
    formData["stream"] = document.getElementById("stream").value;
    formData["marks"] = document.getElementById("marks").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studenttable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.stream;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.marks;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a class="btn btn-primary" onClick="onEdit(this)">Edit</a>
                       <a class="btn btn-danger" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("ID").value = "";
    document.getElementById("name").value = "";
    document.getElementById("stream").value = "";
    document.getElementById("marks").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("stream").value = selectedRow.cells[2].innerHTML;
    document.getElementById("marks").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ID;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.stream;
    selectedRow.cells[3].innerHTML = formData.marks;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studenttable").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("ID").value == "") {
        isValid = false;
        document.getElementById("IDValidationError").classList.remove("hide");
    }
    else if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    }

    else {
        isValid = true;
        if (!document.getElementById("IDValidationError").classList.contains("hide") && !document.getElementById("nameValidationError").classList.contains("hide")) {
            document.getElementById("IDValidationError").classList.add("hide");
            document.getElementById("nameValidationError").classList.add("hide");
        }
    }
    return isValid;
}
