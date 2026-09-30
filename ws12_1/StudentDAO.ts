import { BaseDAO } from "./BaseDAO";
import { Student } from "./Student";

export class StudentDAO extends BaseDAO{
    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, studentcode TEXT NOT NULL, fullname TEXT NOT NULL,gpa TEXT NOT NULL)`)
    }
    public insert(studentcode:string,fullname:string,gpa:number):boolean{
        const stm =this.db.prepare(`INSERT INTO students(studentcode,fullname,gpa)VALUES(?,?,?)`);
        const result =stm.run(studentcode,fullname,gpa);
        return result.changes>0;
    }
    public findALL():Student[]{
        const stm =this.db.prepare(`SELECT *FROM students`);
        const rows =stm.all() as {id:number,studentcode:string,fullname:string,gpa:number}[];
        return rows.map(row => new Student(row.id,row.studentcode,row.fullname,row.gpa));
    }
}