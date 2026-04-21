export interface RegularUser {
	username: string;
	image: string;
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
