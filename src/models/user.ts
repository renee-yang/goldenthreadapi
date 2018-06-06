import { Entity, property, model } from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  userid?: number;

  @property({
    type: 'string',
  })
  userfirstname: number;

  @property({
    type: 'string',
  })
  userlastname: number;

  @property({
    type: 'string',
    required: true,
  })
  useremail: string;

  @property({
    type: 'string',
    required: true,
  })
  userpassword: string;

  donation: number;
  dateFrom: Date;

  getDonation() {
    return this.donation;
  }

  getId() {
    return this.id;
  }
}