import { Strategy } from "passport-jwt";
import { UserFromJwt } from "./model/UserFromJwt";
import { Userpayload } from "./model/Userpayload";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: Userpayload): Promise<UserFromJwt>;
}
export {};
