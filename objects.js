var id= 1;

function Student(firstName,lastName,grade) {
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
}

function Teacher(firstName,lastName,subject) {
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;

}

function Section(name,count) {
    this.id = id++;
    this.name = name;
    this.count = count;
    this.studentList = [];
}