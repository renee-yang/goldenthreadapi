import { Entity, property, model } from '@loopback/repository';

@model()
export class Charities extends Entity {
    @property({
        type: 'number',
        id: true
    })
    id?: number;
    
    @property({
        type: 'string'
    })
    name: string;

    @property({
        type: 'string'
    })
    desc: string;

    getId() {
        return this.id;
    }

}