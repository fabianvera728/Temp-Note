import { createContext } from 'react';

export type Address = {
    city: string;
    street: string;
    location: {
        latitude: number;
        length: number;
    }
}

export type TRegister = {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: Address;
}

export const RegisterContext = createContext<any>({});
