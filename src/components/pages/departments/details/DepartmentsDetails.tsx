"use client";
import scss from "../hero/Hero.module.scss";
import { useGetDepartamentQuery} from "@/redux/api/catalog";
import { useParams } from "next/navigation";

const DepartmentsDetails = () => {
	const { data, isLoading, error } = useGetDepartamentQuery();  
	const { id } = useParams();  

	const numericId = Number(id);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error fetching data</p>;

	const spesDetail = data?.find((item) => item.id === numericId);

	const handleFileClick = (fileUrl: any) => {
		if (fileUrl) {
			window.open(fileUrl, "_blank");
		}
	};

	return (
		<>
			<div className={scss.WorksDetails}>
				<h1 style={{ marginTop: "200px" }}>{spesDetail?.which_dep}</h1>

				<div className={scss.cards}>
					{spesDetail?.departments.map((science, index) => (
						<div className={scss.card} key={index}>
							<h2>{science.name_file}</h2>

							<button
								style={{
									border: "none",
									fontSize: "22px",
									background: "white",
									cursor: "pointer",
								}}
								onClick={() => handleFileClick(science.file)}>
								PDF file
							</button>
						</div>
					))}

          
				</div>
			</div>
		</>
	);
};

export default DepartmentsDetails;

