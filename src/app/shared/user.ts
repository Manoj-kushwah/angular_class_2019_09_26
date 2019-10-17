export class User{
    private firstName:string;
    private lastName:string;
    private dob:string;
    private gender:string;
    private role:string;

    public getFirstName(): string {
        return this.firstName;
    }
    public setFirstName(firstName: string): void {
        this.firstName = firstName;
    }
    public getLastName(): string {
        return this.lastName;
    }
    public setLastName(lastName: string): void {
        this.lastName = lastName;
    }
    public getDob(): string {
        return this.dob;
    }
    public setDob(dob: string): void {
        this.dob = dob;
    }
    public getGender(): string {
        return this.gender;
    }
    public setGender(gender: string): void {
        this.gender = gender;
    }
    public getRole(): string {
        return this.role;
    }
    public setRole(role: string): void {
        this.role = role;
    }
}