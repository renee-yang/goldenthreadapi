import { repository } from '@loopback/repository';
import { CharitiesRepository } from '../repositories/charities.repository';
import { Charities } from '../models/charities';
import { HttpErrors, get, requestBody, post, param } from '@loopback/rest';

export class CharitiesController {
    constructor(
       @repository(CharitiesRepository) private charityRepo: CharitiesRepository,
    ) {}

    //add a charity
    @post('/charities')
    async addCharity(@requestBody() charity: Charities) {
        return this.charityRepo.create(charity);
    }

    //find all charities
    @get('/charities')
    async findCharities(): Promise<Charities[]> {
        return await this.charityRepo.find();
    }

    //be able to find a charity by id
    @get('/charities{charityid}')
    async findCharitiesById(@param.path.number('charityid') charityid: number): Promise<Charities> {

        let charityExists: boolean = !!(await this.charityRepo.count( { charityid }));

        if (!charityExists) {
            throw new HttpErrors.BadRequest(`charity ID ${charityid} does not exist`);
        }

        return await this.charityRepo.findById(charityid);
    }

}