"use client";
import scss from "../hero/Hero.module.scss";
import { useGetSpesQuery } from "@/redux/api/catalog";
import { useParams } from "next/navigation";

const SpesDetails = () => {
	const { data, isLoading, error } = useGetSpesQuery();  
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
			<div className={scss.SpesDetails}>
				<h1 style={{ marginTop: "200px" }}>{spesDetail?.title}</h1>

				<div className={scss.cards}>
					{spesDetail?.curriculums.map((science, index) => (
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

export default SpesDetails;
