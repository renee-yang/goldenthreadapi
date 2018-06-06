import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Donations } from '../models/donations';
import { inject } from '@loopback/core';

export class DonationsRepository extends DefaultCrudRepository<
    Donations,
    typeof Donations.prototype.id
>{
    constructor(
        @inject('datasources.db') protected datasource: juggler.DataSource,
    ) {
        super(Donations, datasource);
    }
}