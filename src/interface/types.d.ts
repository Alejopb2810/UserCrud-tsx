export interface Users {
    id: number;
    email:string;
    password:string;
    first_name:string;
    last_name:string;
    birthday:string;
}

export interface AlertInfo{
    title:string;
    message:string;
    status:string;
}