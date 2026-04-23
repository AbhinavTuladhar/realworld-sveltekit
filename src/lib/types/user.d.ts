export interface RegularUser {
	username: string;
	image: string | null;
	bio: string;
	following: boolean;
}

export interface RegistrationResponse {
	email: string;
	token: string;
	username: string;
	bio: string | null;
	image: string | null;
}

export interface LocalUser {
	username: string;
	email: string;
	image: string | null;
	bio: string | null;
	token: string;
}
