import {UserRepositoryInterface} from "../../../domain/repositories/user.repository.interface.js";
import {GetUserDetailByIdOutputInterface} from "./get-user-detail-by-id.output.interface.js";

export class GetUserDetailByIdUseCase {
    constructor(private readonly userRepository: UserRepositoryInterface) {}
    async execute(id: string): Promise<GetUserDetailByIdOutputInterface | null> {
        const foundUser = await this.userRepository.getUserDetailById(id);
        
        if (!foundUser) {
            return null;
        }

        return {
            id: foundUser.id!,
            email: foundUser.email,
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
        };
    }
}