const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({
            name: name,
            grades: grades
        });
    },

    // Get a student by name
    getStudent(name) {
        for (let student of this.students) {
            if (student.name === name) {
                return student;
            }
        }
        return null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) {
            return null;
        }

        const grades = Object.values(student.grades);

        let total = 0;

        for (let grade of grades) {
            total += grade;
        }

        return Number((total / grades.length).toFixed(2));
    },

    // Get class average for one subject
    getSubjectAverage(subject) {
        let total = 0;
        let count = 0;

        for (let student of this.students) {
            if (student.grades[subject] !== undefined) {
                total += student.grades[subject];
                count++;
            }
        }

        return Number((total / count).toFixed(2));
    },

    // Get top performer
    getTopStudent() {
        let topStudent = null;
        let highestAverage = 0;

        for (let student of this.students) {
            const average = this.getStudentAverage(student.name);

            if (average > highestAverage) {
                highestAverage = average;
                topStudent = student.name;
            }
        }

        return topStudent;
    },

    // Get students whose average is below 70
    getStrugglingStudents() {
        let struggling = [];

        for (let student of this.students) {
            if (this.getStudentAverage(student.name) < 70) {
                struggling.push(student.name);
            }
        }

        return struggling;
    },

    // Convert score to letter grade
    getLetterGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) {
            return "Student not found.";
        }

        let report = `Report Card for ${student.name}\n`;

        for (let subject in student.grades) {
            const score = student.grades[subject];
            report += `${subject}: ${score} (${this.getLetterGrade(score)})\n`;
        }

        report += `Average: ${this.getStudentAverage(name)}`;

        return report;
    }
};

// Test
gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));