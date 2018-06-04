import { post, requestBody } from "@loopback/rest";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { repository } from "@loopback/repository";

export class LoginController {
    constructor(
        @repository(UserRepository.name) private userRepo: UserRepository) { }

    @post('/login')
    async login(@requestBody() login: User) {
        var users = await this.userRepo.find();
        var username = login.username;
        var password = login.password;

        for (var i = 0; i < users.length; i++) {
            if ((username === users[i].username)
                && (password == users[i].password)) {
                return users[i];
            }
        }
        return console.error();
    }
}