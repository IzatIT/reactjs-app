export type AuthRequest = {
    username: string;
    password: string
}

export type AuthResponse = {
    id: number
    authenticationToken: string;
    username: string;
    inn: string;
}