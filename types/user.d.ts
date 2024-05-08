export default interface User {
	profilePictureId: string;
	_id: string;
	nim: string;
	name: string;
	gender: "MALE" | "FEMALE";
	age: number;
	campusArea:
		| "KEMANGGISAN"
		| "ALAMSUTERA"
		| "SENAYAN"
		| "BEKASI"
		| "BANDUNG"
		| "MALANG"
		| "SEMARANG";
	studyProgram: string;
	major: string;
	role: boolean;
	department: "HUMANCAPITAL" | "MEDIA" | "RELATION" | "CREATIVE" | "EDUDEV";
	division: string;
	email: string;
	createdAt: Date;
	accessLevel: 0 | 1 | 2;
	bio: string;
}
