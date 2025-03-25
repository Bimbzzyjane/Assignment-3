//Part 1: Student Data Fetcher (Promises and async/await)
function fetchStudentData(id) {
    return new Promise((resolve, reject) => {
        //to simulate an API call, we use setTimeout to delay the execution of the code block for 1 second
        setTimeout(() => {
            if (id >= 1 && id <= 10) {
                resolve({
                    id: id,
                    name: `Student ${id}`,
                    age: 20 + id,
                    course: 'Computer Science'
                });
            } else {
                reject(new Error('Invalid student ID'));
            }
        }, 1000);
    });
}
console.log(fetchStudentData(5));
// 1.2 async function to get student info
async function getStudentInfo(id) {
    try {
        const studentData = await fetchStudentData(id); //await the promise to resolve
        console.log(studentData); //log data if successful
    } catch (error) {
        console.error(error.message); //log error message if an error occurs
    }
}
getStudentInfo(5);

// 2.1. Create an array of at least 10 student objects
const students = [
    { id: 1, name: 'Joshua', grade: 85, subjects: ['Math', 'Computer Science'] },
    { id: 2, name: 'Janet', grade: 92, subjects: ['English', 'Physics'] },
    { id: 3, name: 'Justice', grade: 88, subjects: ['Biology', 'Art'] },
    { id: 4, name: 'Kalu', grade: 95, subjects: ['Science', 'History'] },
    { id: 5, name: 'Victor', grade: 78, subjects: ['Math', 'Finance'] },
    { id: 6, name: 'Justice', grade: 91, subjects: ['Art', 'Science'] },
    { id: 7, name: 'Esther', grade: 84, subjects: ['Engineering', 'Math'] },
    { id: 8, name: 'Musa', grade: 89, subjects: ['Science', 'English'] },
    { id: 9, name: 'Genevieve', grade: 93, subjects: ['Math', 'Art'] },
    { id: 10, name: 'Oluwatoyosi', grade: 87, subjects: ['Music', 'Pol Science'] }
];
// 2.2.a) function to get students with a grade above 90
function getTopStudents(students) {
    return students.filter(student => student.grade > 90);
}
// 2.2.b) function to returns students who are taking a specific subject
function getStudentsBySubject(students, subject) {
    return students.filter(student => student.subjects.includes(subject));
}
// 2.2.c) function to calculate average grade of all students
function calculateAverageGrade(students) {
    const totalGrade = students.reduce((sum, student) => sum + student.grade, 0);
    return totalGrade / students.length;
}
// 2.2.d) To add a new subject to all students' subject arrays
function addSubjectToAll(students, newSubject) {
    students.forEach(student => {
        if (!student.subjects.includes(newSubject)) {
            student.subjects.push(newSubject);
        }
    });
}
// Example usage:
console.log(getTopStudents(students));
console.log(getStudentsBySubject(students, 'Math'));
console.log(calculateAverageGrade(students));
addSubjectToAll(students, 'Physical Education');
console.log(students);

// Part 3: Student Class and Constructor Function
class Student {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.subjects = [];
    }

    addSubject(subject) {
        if (!this.subjects.includes(subject)) {
            this.subjects.push(subject);
        }
    }

    removeSubject(subject) {
        this.subjects = this.subjects.filter(sub => sub !== subject);
    }

    getInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Grade: ${this.grade}, Subjects: ${this.subjects.join(', ')}`;
    }
}

function TeacherAssistant(name, assignedSubject) {
    this.name = name;
    this.assignedSubject = assignedSubject;
}

TeacherAssistant.prototype.assistStudent = function(student) {
    if (!student.subjects.includes(this.assignedSubject)) {
        student.subjects.push(this.assignedSubject);
    }
};

// Part 4: ES6 Syntax
const getTopStudents = students => students.filter(({ grade }) => grade > 90);

const getStudentsBySubject = (students, subject) => students.filter(({ subjects }) => subjects.includes(subject));

const calculateAverageGrade = students => {
    const totalGrade = students.reduce((sum, { grade }) => sum + grade, 0);
    return totalGrade / students.length;
};

const addSubjectToAll = (students, newSubject) => {
    students.forEach(student => {
        if (!student.subjects.includes(newSubject)) {
            student.subjects.push(newSubject);
        }
    });
};

const getStudentSummary = (student = { id: 0, name: 'Unknown', grade: 0, subjects: [] }) => {
    const { id, name, grade, subjects } = student;
    return `ID: ${id}, Name: ${name}, Grade: ${grade}, Subjects: ${subjects.join(', ')}`;
};

// Part 5: Error Handling
class InvalidStudentIdError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidStudentIdError';
    }
}

async function getStudentInfo(id) {
    try {
        const studentData = await fetchStudentData(id);
        console.log(studentData);
    } catch (error) {
        if (error instanceof InvalidStudentIdError) {
            console.error(`Custom Error: ${error.message}`);
        } else {
            console.error(`General Error: ${error.message}`);
        }
    }
}

function fetchStudentData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id >= 1 && id <= 10) {
                resolve({
                    id: id,
                    name: `Student ${id}`,
                    age: 20 + id,
                    course: 'Computer Science'
                });
            } else {
                reject(new InvalidStudentIdError('Invalid student ID'));
            }
        }, 1000);
    });
}

// LEETCODE-CHALLENGE(DATA STRUCTURES AND ALGORITHMS)
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};

// Bonus Challenge
async function processStudentData(ids) {
    try {
        const studentDataArray = await Promise.all(ids.map(id => fetchStudentData(id)));
        const validStudents = studentDataArray.filter(student => student);
        validStudents.forEach(data => {
            const student = new Student(data.id, data.name, data.grade);
            console.log(student.getInfo());
        });
    } catch (error) {
        console.error(`Error processing student data: ${error.message}`);
    }
}