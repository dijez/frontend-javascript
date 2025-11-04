// define student interface 
var student1 = {
    firstName: "kadija",
    lastName: "ahmad",
    age: 13,
    location: "nigeria"
};
var student2 = {
    firstName: "musa",
    lastName: "ahmad",
    age: 43,
    location: "niger"
};
var studentList = [student1, student2];
var table = document.createElement('table');
for (var _i = 0, studentList_1 = studentList; _i < studentList_1.length; _i++) {
    var student = studentList_1[_i];
    var table_row = document.createElement('tr');
    var table_data = document.createElement('td');
    table_data.textContent = student.firstName;
    var table_data_1 = document.createElement('td');
    table_data_1.textContent = student.location;
    // putting the table data inside the table rows 
    table_row.appendChild(table_data);
    table_row.appendChild(table_data_1);
    table.appendChild(table_row);
}
document.body.appendChild(table);
