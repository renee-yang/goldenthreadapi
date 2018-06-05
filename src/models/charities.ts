import { Entity, property, model } from '@loopback/repository';

@model()
export class Charities extends Entity {
    @property({
        type: 'number',
        id: true
    })
    charityid?: number;
    
    @property({
        type: 'string'
    })
    charityname: string;

    @property({
        type: 'string'
    })
    charitydesc: string;

    getId() {
        return this.id;
    }

}