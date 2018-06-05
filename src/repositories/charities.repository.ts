import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Charities } from '../models/charities';
import { inject } from '@loopback/core';

export class CharitiesRepository extends DefaultCrudRepository< 
    Charities,
    typeof Charities.prototype.id
>{
    constructor(
        @inject('datasources.db') protected datasource: juggler.DataSource,
    ) {
        super(Charities, datasource);
    }
}