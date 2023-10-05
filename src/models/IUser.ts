export interface IUser {
    user_id: string,
    username: string,
    first_name: string | null,
    last_name: string | null,
    email: string,
    is_active: boolean,
    last_login: string,
    date_joined: string,
    title: string | null,
    profile: string,
    country: string,
    avatar: string | null | undefined,
    company_name: string,
    address: string | null,
    phone_number: string | null,
    organization: string
}
export interface IUserResponse {
    token: string,
    status: string,
    type: string,
    user: IUser,
    currentAuthorities: string[],
}
