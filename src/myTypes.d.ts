export interface Friend {
    name: string;
    phone: string;
    dob?: Date;            // Optional date of birth
    age: number;
    interests?: string[];  // Optional interests array
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
        email: string;
        extension: number;
    };
}

export interface ColleagueHistory {
    current: Colleague[];
    former: Colleague[];
}

export interface EmailContact {
    name: string;
    email: string;
}
