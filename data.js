var allStudents = [];
var allTeachers = [];
var allSections = [];

allStudents.push(new Student("Kate", "Spake", 9));
allStudents.push(new Student("Dean", "Cab", 10));
allStudents.push(new Student("Alisia", "Fazio", 11));
allStudents.push(new Student("Arvis", "Akhavi", 11));
allStudents.push(new Student("Yosabel", "Tekeste", 11));
allStudents.push(new Student("Gloria", "Léon", 11));
allStudents.push(new Student("Magda", "Gourinchas", 11));

allTeachers.push(new Teacher("Michael", "Weitz", "Math"));
allTeachers.push(new Teacher("Kimberly", "D'Adamo", "Art"));
allTeachers.push(new Teacher("Matt", "Albinson", "Computer Science"));
allTeachers.push(new Teacher("Linda", "Carr", "Dance"));
allTeachers.push(new Teacher("Robin", "Vander-Vegt", "History"));
allTeachers.push(new Teacher("Richard", "Conn", "Theory of Knowledge"));
allTeachers.push(new Teacher("Karl", "Kaku", "English"));


allSections .push(new Section("Math", 30));
allSections .push(new Section("Art", 30));
allSections .push(new Section("Computer Science", 45));
allSections .push(new Section("Dance", 45));
allSections .push(new Section("History", 30));
allSections .push(new Section("Theory of Knowledge", 30));
allSections .push(new Section("English", 30));


var allItems = [allStudents, allTeachers, allSections];