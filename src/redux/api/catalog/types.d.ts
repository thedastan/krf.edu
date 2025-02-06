namespace NEWS {
	type GetNewsRes = [
		{
			id: number;
			title: string;
			description: string;
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
				file: any;
			}>;
			title: string;
			name: string;
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
				file: string;
			}>;
			title: string;
			name: string;
		}
	];

	type GetIlimReq = void;
}

namespace DEPAR {
	type GetDepartamentRes = [
		{
			id: number;
			departments: Array<{
				id: number;
				name_file: string;
				file: string;
			}>;
			which_dep: string;
			name: string;
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
				file: string;
			}>;
			title: string;
			name: string;
		}
	];

	type GetAccReq = void;
}

namespace ADMIN {
	type GetAdminRes = [
		{
			id: number;
			filefield_administration: Array<{
				name_file:string
				file: string;
			}>;
			fullname: string;
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
			fullname: string;
			lesson: string;
			experience: string;
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
