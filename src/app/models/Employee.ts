export class Employee{
    employeeId:string;
    lastName:string;
    firstName:number;
    constructor(id,fname,lname){
        this.employeeId=id;
        this.firstName=fname;
        this.lastName=lname;
    }
}