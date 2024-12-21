let studentlist=[]
function addInformation(){
    let name=document.getElementById("name");
    let roll=document.getElementById("roll");
    let email=document.getElementById("email");
    let marks=document.getElementById("marks");
    let city=document.getElementById("city");
    
    let student={
        Name:name.value,
        RollNo:roll.value,
        Email:email.value,
        Marks:marks.value,
        City:city.value
    }
    
    studentlist.push(student)
    displayStudent(student)
}
function displayStudent(student){
    const table = document.getElementById('Student-table');

        const newRow = table.insertRow(-1);

        const nameCell  = newRow.insertCell(0);
        const rollCell  = newRow.insertCell(1);
        const emailCell = newRow.insertCell(2);
        const marksCell = newRow.insertCell(3);
        const cityCell  = newRow.insertCell(4);

        nameCell.innerText = student.Name;
        rollCell.innerText = student.RollNo;
        emailCell.innerText = student.Email;
        marksCell.innerText = student.Marks;
        cityCell.innerText = student.City;
        
    }

