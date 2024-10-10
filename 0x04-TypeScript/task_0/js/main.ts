export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Juan",
    lastName: "Miller",
    age: 22,
    location: "Nairobi",
  };
  
  const student2: Student = {
    firstName: "Milly",
    lastName: "Serah",
    age: 24,
    location: "Kach",
  };
  
  const studentsList: Array<Student> = [student1, student2];
  
  const styleSheet = `
    html, body {
      margin: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Arial, sans-serif;
    }
    table {
      border-collapse: collapse;
    }
    thead {
      font-weight: bold;
    }
    td {
      padding: 10px;
      border: 1px solid gray;
      cursor: pointer;
      text-align: center;
    }
    td:hover {
      background: gainsboro;
    }
  `;
  
  const applyStyles = () => {
    const styleSheetElement = document.createElement('style');
    styleSheetElement.innerHTML = styleSheet;
    document.head.appendChild(styleSheetElement);
    document.title = 'Task 0';
  };
  
  /**
   * Displays information about students in a table.
   * @param students The list of students to display.
   */
  export const displayStudents = (students: Array<Student>): void => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const headRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
  
    headRow.innerHTML = '<td>FirstName</td><td>Location</td>';
    tableHead.appendChild(headRow);
  
    students.forEach(student => {
      const bodyRow = document.createElement('tr');
      bodyRow.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
      tableBody.appendChild(bodyRow);
    });
  
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    document.body.appendChild(table);
  };
  
  applyStyles();
  displayStudents(studentsList);  
  document.title = 'Task 0';