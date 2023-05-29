export class Appointment{
    public id:number;
    public doctor: string;
    public date: Date;
    public seen: boolean;

    constructor(id:number,date:Date,doctor:string,seen:boolean) {
        this.id = id;
        this.date = date;
        this.doctor = doctor;
        this.seen = seen
    }
}