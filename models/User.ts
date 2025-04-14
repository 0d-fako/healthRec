import bcrypt from "bcrypt";

export abstract class User {
    id: string;
    name: string;
    email: string;
    password: string;
  
    constructor(id: string, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = this.hashPassword(password);
    }

    private hashPassword(password: string): string {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    }

    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }
}