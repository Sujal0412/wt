let students = [];
let editingIndex = null;
// Function to add or update a student
function addStudent(name, age, grade, Id, Branch, Batch, gender) {
  const student = { name, age, grade, Id, Branch, Batch, gender };
  students.push(student);
}
// Function to display students in the table
function displayStudents() {
  const tableBody = document.getElementById("studentTableBody");
  tableBody.innerHTML = ""; // Clear the table body
  students.forEach((student, index) => {
    const row = ` 
<tr> 
<td>${student.name}</td> 
<td>${student.age}</td> 
<td>${student.grade}</td> 
<td>${student.Id}</td> 
<td>${student.Branch}</td> 
<td>${student.Batch}</td> 
<td>${student.gender}</td> 
<td> 
<button class="btn btn-warning btn-sm" 
onclick="editStudent(${index})">Edit</button> 
<button class="btn btn-danger btn-sm" 
onclick="deleteStudent(${index})">Delete</button>
IT262-wt 23IT052 
</td> 
</tr> 
`;
    tableBody.innerHTML += row;
  });
}
// Handle form submission
document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;
    const Id = document.getElementById("Id").value;
    const Branch = document.querySelector('input[name="Branch"]:checked').value; // Corrected
    const gender = document.querySelector('input[name="gender"]:checked').value; // Corrected
    const Batch = document.getElementById("Batch").value;
    if (editingIndex !== null) {
      students[editingIndex] = { name, age, grade, Id, Branch, Batch, gender };
      editingIndex = null;
    } else {
      addStudent(name, age, grade, Id, Branch, Batch, gender);
    }
    displayStudents();
    // Reset form fields
    document.getElementById("studentForm").reset();

    document.querySelector("button[type=submit]").innerText = "Add Student"; // Reset the button text
  });
// Function to edit a student
function editStudent(index) {
  const student = students[index];
  document.getElementById("name").value = student.name;
  document.getElementById("age").value = student.age;
  document.getElementById("grade").value = student.grade;
  document.getElementById("Id").value = student.Id;
  document.getElementById("gender").value = student.gender;
  document.querySelector(
    `input[name="Branch"][value="${student.Branch}"]`
  ).checked = true; // Set branch radio button
  document.getElementById("Batch").value = student.Batch;
  document.querySelector("button[type=submit]").innerText = "Save";
  editingIndex = index;
}
// Function to delete a student
function deleteStudent(index) {
  students.splice(index, 1); // Remove student from array displayStudents(); // Refresh the table
}
