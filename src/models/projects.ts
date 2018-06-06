import { Entity, property, model } from '@loopback/repository';

@model() 
export class Projects extends Entity {
    @property({
        type: 'number',
        id: true,
    })
    projectid?: number;

    @property({
        type: 'number',
        required: true,
    })
    charityid: number;

    @property({
        type: 'string',
        required: true,
    })
    projectdesc: string;
}