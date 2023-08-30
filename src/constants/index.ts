export enum Loading {
    INITIAL = 'initial',
    PENDING = 'pending',
    REJECTED = 'rejected',
    FULFILLED = 'fulfilled',
}

export enum EntityType {
    USERS = 'Users',
    REPOSITORIES = 'Repositories',
}

export type User = {
    login: string;
    id: number;
    type: string;
    avatar_url: string;
};

export type Repository = {
    id: number;
    full_name: string;
    description: string;
};
