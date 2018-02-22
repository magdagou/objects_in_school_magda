function listItems(){
    var userSelection = document.getElementById("categories").value;
    if (userSelection == 1){
        listStudents();
    }
    if (userSelection == 2){
        listTeachers();
    }
    if (userSelection == 3){
        listSections();
    }
}


function setUp(){
    buildStudentSelection();
    buildSectionSelection();
    buildSelectionList();
}

function listStudents(){
    var html = "<table border='1' style=\"width:100%; color: white\">";
    for(var i=0; i< allStudents.length;i++){
        html += "<tr >";
        html += "<td>" + allStudents[i].firstName + "</td>";
        html += "<td>" + allStudents[i].lastName + "</td>";
        html += "<td>" + allStudents[i].grade + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("html").innerHTML=html;
}

function listTeachers(){
    var html = "<table border='1' style=\"width:100%; color: white\">";
    for(var i=0; i< allTeachers.length;i++){
        html += "<tr>";
        html += "<td>" + allTeachers[i].firstName + "</td>";
        html += "<td>" + allTeachers[i].lastName + "</td>";
        html += "<td>" + allTeachers[i].subject + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("html").innerHTML=html;
}

function listSections(){
    var html = "<table border='1' style=\"width:100%; color: white\">";
    for(var i=0; i< allSections.length;i++){
        html += "<tr>";
        html += "<td>" + allSections[i].name + "</td>";
        html += "<td>" + allSections[i].count + "</td>";
        html += "</tr>";
    }
    html += "</table>";
    document.getElementById("html").innerHTML=html;
}

function addStudent(){
    var firstName = document.getElementById("StudentFirstName").value;
    var lastName = document.getElementById("StudentLastName").value;
    var grade = document.getElementById("StudentGrade").value;
    if (grade > "12" && grade < "9") {
        document.getElementById("add").innerHTML = "Insert existing grade";
    }
    if (firstName.length <= -1 || lastName.length <= -1 || grade.length <= -1){
        document.getElementById("add").innerHTML = "Fill in the gaps";
    }
    if (grade <= 12 && 9 <= grade && grade.length >= 1 && lastName.length >= 1 && firstName.length >= 1) {
        allStudents.push(new Student(firstName, lastName, grade));
        document.getElementById("add").innerHTML = firstName + " " + lastName + " has been added";
    }
}

function addTeacher(){
    var firstName = document.getElementById("TeacherFirstName").value;
    var lastName = document.getElementById("TeacherLastName").value;
    var subject = document.getElementById("TeacherSubject").value;
    if (firstName.length <= -1 || lastName.length <= -1 || subject.length <= -1){
        document.getElementById("add").innerHTML = "Sorry, please fill in the gaps";
    }
    if (firstName.length >= 1 && lastName.length >= 1 && subject.length >= 1){
        allTeachers.push(new Teacher(firstName, lastName, subject));
        document.getElementById("add").innerHTML = firstName + " " + lastName + " has been added";
    }
}

function addSection(){
    var section = document.getElementById("SectionName").value;
    var count = document.getElementById("SectionCount").value;
    if (section.length <= -1 || count.length <= -1){
        document.getElementById("add").innerHTML = "Sorry, please fill in the gaps";
    }
    if (section.length >= 1 && count.length >= 1){
        allSections.push(new Section(section, count));
        document.getElementById("add").innerHTML = section + " has been added";
    }
}

function buildStudentSelection(){
    document.getElementById("studentList").innerHTML="";
    var studentList = "<option>Select Student</option>";
    for (var i = 0; i < allStudents.length; i++){
        studentList += "<option value ='" + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>"
    }
    document.getElementById("studentList").innerHTML+= studentList;
}

function buildSectionSelection(){
    document.getElementById("sectionList").innerHTML = "";
    var sectionList = "<option>Select Section</option>";
    for (var i = 0; i < allSections.length; i++) {
        sectionList += "<option value ='" + allSections[i].id + "'>" + allSections[i].name + "</option>"
    }
    document.getElementById("sectionList").innerHTML += sectionList;
}

function getStudentById(studentId){
    for(var i = 0; i < allStudents.length; i++){
        if(allStudents[i].id == studentId){
            return allStudents[i];
        }
    }
}

function getSectionById(sectionId){
    for(var i = 0; i < allSections.length; i++){
        if(allSections[i].id == sectionId){
            return allSections[i];
        }
    }
}

function AddStudentToSection(){
    var studentObject = getStudentById(document.getElementById("studentList").value);
    var sectionObject = getSectionById(document.getElementById("sectionList").value);
    sectionObject.studentList.push(studentObject);
    document.getElementById("StudentSection").innerHTML = studentObject.firstName + " " + studentObject.lastName + " has been added to " + sectionObject.name
}

function buildSelectionList(){
    document.getElementById("itemsList").innerHTML = "";
    var sectionList = "<option> Select Item </option>";
    for (var i = 0; i < allSections.length; i++){
        sectionList += "<option value ='" + allSections[i].id + "'>" + allSections[i].name + "</option>"
    }
    document.getElementById("itemsList").innerHTML += sectionList;
}

function ListItemsInASection(){
    var section = getSectionById(document.getElementById("itemsList").value);
    var listOutput = "<table border = 1 style=\"width:100%; color: white\">";
    for (var i = 0; i < section.studentList.length; i++){
        listOutput += "<tr>";
        listOutput += "<td>" + section.studentList[i].firstName + "</td>";
        listOutput += "<td>" + section.studentList[i].lastName + "</td>";
        listOutput += "<td>" + section.studentList[i].grade + "</td>";
        listOutput += "</tr>";
    }
    listOutput += "</table>";
    document.getElementById("listItems").innerHTML = listOutput;
}