const students = [
    {
        name:'Tomate',
        idade: 20
    
    },
    {
        name:'Sophie',
        idade: 6
    
    },
    {
        name:'Isis',
        idade: 12
    
    },
];

function getAppprovedStudents(studentsList){
    return studentsList.filter(student=> student.idade >= 18);
}
console.log('Maior de idade');
console.log(getAppprovedStudents(students));

console.log('todas as pessoas');
console.log(students);