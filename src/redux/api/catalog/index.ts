import { api as index } from "..";
const api = index.injectEndpoints({
	endpoints: (build) => ({
		getNews: build.query<NEWS.GetNewsRes, NEWS.GetNewsReq>({
			query: () => ({
				url: `news`,
				method: "GET",
			}),
			providesTags: ["news"],
		}),
		getGallery: build.query<GALLERY.GetGalleryRes, GALLERY.GetGalleryReq>({
			query: () => ({
				url: `gallery`,
				method: "GET",
			}),
			providesTags: ["gallery"],
		}),

		getSpes: build.query<SPES.GetSpesRes, SPES.GetSpesReq>({
			query: () => ({
				url: `curriculum`,
				method: "GET",
			}),
			providesTags: ["curriculum"],
		}),

		getIlim: build.query<Ilim.GetIlimRes, Ilim.GetIlimReq>({
			query: () => ({
				url: `science`,
				method: "GET",
			}),
			providesTags: ["science"],
		}),
		getDepartament: build.query<
			DEPAR.GetDepartamentRes,
			DEPAR.GetDepartamentReq
		>({
			query: () => ({
				url: `department`,
				method: "GET",
			}),
			providesTags: ["department"],
		}),

		getAcc: build.query<ACC.GetAccRes, ACC.GetAccReq>({
			query: () => ({
				url: `accreditation`,
				method: "GET",
			}),
			providesTags: ["accreditation"],
		}),
		getAdmin: build.query<ADMIN.GetAdminRes, ADMIN.GetAdminReq>({
			query: () => ({
				url: `administration`,
				method: "GET",
			}),
			providesTags: ["administration"],
		}),

		getTicher: build.query<TICH.GetTichRes, TICH.GetTichReq>({
			query: () => ({
				url: `teacher`,
				method: "GET",
			}),
			providesTags: ["teacher"],
		}),

		getStudent: build.query<STUDENT.GetStudentesRes, STUDENT.GetStudentesReq>({
			query: () => ({
				url: `quantity_students`,
				method: "GET",
			}),
			providesTags: ["quantitystudents"],
		}),

		getTichCount: build.query<
			TICHCOUNT.GetTichCountRes,
			TICHCOUNT.GetTichCountReq
		>({
			query: () => ({
				url: `quantity_teachers`,
				method: "GET",
			}),
			providesTags: ["quantityteachers"],
		}),
	}),
});

export const {
	useGetNewsQuery,
	useGetGalleryQuery,
	useGetSpesQuery,
	useGetIlimQuery,
	useGetDepartamentQuery,
	useGetAccQuery,
	useGetAdminQuery,
	useGetTicherQuery,
	useGetStudentQuery,
	useGetTichCountQuery,
} = api;
