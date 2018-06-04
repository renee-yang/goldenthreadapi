import { post, get, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { repository } from "@loopback/repository";

export class UserController {
    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository) { }

    @get('/user')
    async getAllUsers(): Promise<Array<User>> {
        return await this.userRepo.find();
    }
}