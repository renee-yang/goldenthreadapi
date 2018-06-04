import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class RegistrationController {
    private userRepo;
    constructor(userRepo: UserRepository);
    createNewUser(user: User): Promise<User>;
}
