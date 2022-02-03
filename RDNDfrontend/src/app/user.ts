export default class User {

	id!: number;
	username!: string;
	email!: string;
	phone!: string;

	password!: string;
	/*
    constructor(id: number, username: string, password: string, email:string)
    {
        this.id=id;
        this.username=username;
        this.password=password;
        this.email=email;
        
    }*/
	constructor(id: number, username: string,  email:string)
    {
        this.id=id;
        this.username=username;
        
        this.email=email;
        
    }
}