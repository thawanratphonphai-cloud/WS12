import { BaseDAO } from "./BaseDAO";
import { User } from "./User";

export class UserDAO extends BaseDAO{
    protected initTable(): void {
        this.db.exec(`
            CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, email TEXT NOT NULL)`)
    }
    public insert(name:string,email:string):boolean{
        const stm =this.db.prepare(`INSERT INTO users(name,email)VALUES(?,?)`);
        const result =stm.run(name,email);
        return result.changes>0;
    }
    public findALL():User[]{
        const stm =this.db.prepare(`SELECT *FROM users`);
        const rows =stm.all() as {id:number,name:string,email:string}[];
        return rows.map(row => new User(row.id,row.name,row.email));
    }
}