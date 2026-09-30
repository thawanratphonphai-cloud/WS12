import { StudentDAO} from "./StudentDAO";

const studentDAO =new StudentDAO();

studentDAO.insert("650036529","อาต๋า",4.00);
studentDAO.insert("782294240","อาตู๋",3.20);
studentDAO.insert("18428120","อาตี๋",2.50);

const students =studentDAO.findALL();
let honor:string;
students.forEach(s =>{
    if(s.isHonors() === true)honor= "เกียรตินิยม";
    else honor="";
    console.log(`${s.getStudentcode()}${s.getFullname()}${s.getGpa()}${honor}`);
})