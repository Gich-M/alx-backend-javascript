import getListStudents from "./0-get_list_students.js";
import getStudentByLocation from "./2-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentByLocation(students, 'San Francisco'));