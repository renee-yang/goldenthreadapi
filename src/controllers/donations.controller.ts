import { repository } from '@loopback/repository';
import { DonationsRepository } from '../repositories/donations.repository';
import { Donations } from '../models/donations';
import { HttpErrors, get, requestBody, post, param } from '@loopback/rest';

export class DonationsController {
    constructor(
        @repository(DonationsRepository) private donationRepo: DonationsRepository,
    ) {}

    //add a donation
    @post('/donations')
    async addDonation(@requestBody() donation: Donations) {
        return this.donationRepo.create(donation);
    }

    //find all donations
    @get('/donations')
    async findDonations(): Promise<Donations[]> {
        return await this.donationRepo.find();
    }

    //access a donation by id
    @get('/donations{id}')
    async findDonationbyDonationId(@param.path.number('id') id: number): Promise<Donations> {

        let donationExists: boolean = !!(await this.donationRepo.count( { id }));

        if (!donationExists) {
            throw new HttpErrors.BadRequest(`donation ID ${id} does not exist`);
        }

        return await this.donationRepo.findById(id);
    }
}