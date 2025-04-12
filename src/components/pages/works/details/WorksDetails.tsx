"use client";
import scss from "../hero/Hero.module.scss";
import { useGetIlimQuery} from "@/redux/api/catalog";
import { useParams } from "next/navigation";

const WorksDetails = () => {
	const { data, isLoading, error } = useGetIlimQuery();  
	const { id,locale } = useParams();  

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
				<h1 style={{ marginTop: "200px" }}>{locale === "kg" ? spesDetail?.title_ky : spesDetail?.title_ru}</h1>

				<div className={scss.cards}>
					{spesDetail?.sciences.map((science, index) => (
						<div className={scss.card} key={index}>

			 
							<h2>	{locale === "kg" ? science.name_file_ky : science.name_file_ru}</h2>

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

export default WorksDetails;
