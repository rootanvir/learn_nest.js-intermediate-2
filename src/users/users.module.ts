import { Module , forwardRef} from "@nestjs/common";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";
import { AuthModule } from "src/auth/auth.module";
import { User } from "./user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    controllers: [UserController],
    providers:[UsersService],
    exports : [UsersService],
    imports : [TypeOrmModule.forFeature([User])],

})
export class UsersModule {
 
}