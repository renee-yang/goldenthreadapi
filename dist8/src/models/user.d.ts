import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    userid?: number;
    userfirstname: number;
    userlastname: number;
    useremail: string;
    userpassword: string;
    donation: number;
    dateFrom: Date;
    getDonation(): number;
    getId(): any;
}
