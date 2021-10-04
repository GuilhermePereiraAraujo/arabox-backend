import { IsInt, IsString, IsUrl } from "class-validator";
import { Profile } from "../entities/profile.entity";

export class CreateProfileDto implements Profile{
    id?: number;
    
    @IsString()
    nickname: string;

    @IsUrl({
        require_protocol: true,
    })
    avatarUrl: string;

    @IsInt()
    userId: number;

}
