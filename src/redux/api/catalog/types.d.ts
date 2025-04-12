namespace NEWS {
	type GetNewsRes = [
		{
			id: number;
			title: string;
			title_ru: string;
			title_ky: string;
			description: string;
			description_ru: string;
			description_ky: string;
			image: string;
		}
	];

	type GetNewsReq = void;
}

namespace GALLERY {
	type GetGalleryRes = [
		{
			id: number;
			image: string;
		}
	];

	type GetGalleryReq = void;
}

namespace SPES {
	type GetSpesRes = [
		{
			id: number;
			curriculums: Array<{
				id: number;
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				file: string;
			}>;
			title: string;
			title_ru: string;
			title_ky: string;
			name: string;
			name_ru: string;
			name_ky: string;
		}
	];

	type GetSpesReq = void;
}

namespace Ilim {
	type GetIlimRes = [
		{
			id: number;
			sciences: Array<{
				id: number;
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				file: string;
			}>;
			title: string;
			title_ru: string;
			title_ky: string;
			name: string;
			name_ru: string;
			name_ky: string;
		}
	];

	type GetIlimReq = void;
}

namespace DEPAR {
	type GetDepartamentRes = [
		{
			id: number;
			events: Array<any>;
			departments: Array<{
				id: number;
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				file: string;
			}>;
			name: string;
			name_ru: string;
			name_ky: string;
		}
	];

	type GetDepartamentReq = void;
}

namespace ACC {
	type GetAccRes = [
		{
			id: number;
			accreds: Array<{
				id: number;
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				file: any;
			}>;
			title: string;
			title_ru: string;
			title_ky: string;
			name: string;
			name_ru: string;
			name_ky: string;
		}
	];

	type GetAccReq = void;
}

namespace ADMIN {
	type GetAdminRes = [
		{
			id: number;
			filefield_administration: Array<{
				name_file: string;
				name_file_ky: string;
				name_file_ru: string;
				file: string;
			}>;
			fullname: string;
			fullname_ky: string;
			fullname_ru: string;
			lesson: string;
		}
	];

	type GetAdminReq = void;
}

namespace TICH {
	type GetTichRes = [
		{
			id: number;
			image: string;
			full_name: string;
			lesson: string;
			lesson_ru: string;
			lesson_ky: string;
			experience: string;
			experience_ru: string;
			experience_ky: string;
			file: string;
		}
	];

	type GetTichReq = void;
}

namespace STUDENT {
	type GetStudentesRes = [
		{
			quantity_students: number;
		}
	];

	type GetStudentesReq = void;
}

namespace TICHCOUNT {
	type GetTichCountRes = [
		{
			quantity_teachers: number;
		}
	];

	type GetTichCountReq = void;
}
