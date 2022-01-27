export class User
{
    id!: number;
    username!: string;
    password!: string;
    email!: string;
    phone!: string;
    constructor(id: number, username: string, password: string, email: string, phone: string)
    {
        this.id=id;
        this.username=username;
        this.password=password;
        this.phone=phone;
        this.email=email;
    }
}