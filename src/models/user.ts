import {Entity, property, model} from '@loopback/repository';

@model()
export class User extends Entity {
    @property({
        type: 'number',
        required: true,
        id: true
    })
    id?: number;

    @property({
        type: 'string', 
        required: true,
        id: true
    })
    name: string;

    @property({
        type: 'string',
        required: true,
        id: true
    })
    username: string;

    @property({
        type: 'string',
        required: true,
        id: true
    })
    email: string;

    @property({
        type: 'string',
        required: true,
        id: true
    })
    password: string;

    getId() {
        return this.id;
    }
}