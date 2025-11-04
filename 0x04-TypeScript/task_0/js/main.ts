// define student interface 

interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName:"kadija",
    lastName:"ahmad",
    age: 13,
    location:"nigeria"
}

const student2: Student = {
    firstName:"musa",
    lastName:"ahmad",
    age: 43,
    location:"niger"
}
const studentsList: Student[] = [student1,student2];

const table = document.createElement('table');

for(const student of studentsList){
    
    const table_row = document.createElement('tr');
    
    const table_data = document.createElement('td') 
    table_data.textContent = student.firstName;
   
    const table_data_1 = document.createElement('td')  
    table_data_1.textContent = student.location;

// putting the table data inside the table rows 
    table_row.appendChild(table_data)
    table_row.appendChild(table_data_1)
    table.appendChild(table_row)

}

document.body.appendChild(table)


