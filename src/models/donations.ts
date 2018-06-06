import { Entity, property, model } from '@loopback/repository';
import { Charities } from './charities';

@model()
export class Donations extends Entity {
    @property({
        type: 'number',
        id: true,
    })
    id?: number;

    @property({
        type: 'number',
        required: true,
    })
    charityid: number;

    @property({
        type: 'number',
        required: true,
    })
    userid: number;

    @property({
        type: 'number',
        required: true,
    })
    donationamount: number;

    @property({
        type: 'number',
        required: true,
    })
    datedonated: Date;
}