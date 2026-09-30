export class Student{
    constructor(private id:number,private studentcode:string,private fullname:string,private gpa:number){}
    public getId():number{return this.id};
    public getStudentcode():string{return this.studentcode};
    public getFullname():string{return this.fullname};
    public getGpa():number{return this.gpa};
    public getInfo():string{
        return`User:${this.id}${this.studentcode}${this.fullname}${this.gpa}`;
    }
    public isHonors():boolean{
        if(this.gpa >=3.5)return true;
        else return false;
    }
}