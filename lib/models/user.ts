import { UserRole } from "./user-role";

export interface User {
    firstName: string;
    lastName?: string;
    username: string;
    email: string;
    phone: string;
    role: UserRole;
    address: string;
}