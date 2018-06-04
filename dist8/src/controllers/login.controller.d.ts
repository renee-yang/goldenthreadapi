import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class LoginController {
    private userRepo;
    constructor(userRepo: UserRepository);
    login(login: User): Promise<void | User>;
}
