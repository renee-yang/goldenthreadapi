import { post, get, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { repository } from "@loopback/repository";

export class RegistrationController {
    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository
    ) { }

    @post('/registration')
    async createNewUser(@requestBody() user: User) {
        return await this.userRepo.create(user);
    }
}