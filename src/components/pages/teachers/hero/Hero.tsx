"use client";
import { useGetAdminQuery, useGetIlimQuery, useGetTicherQuery } from "@/redux/api/catalog";
import scss from "./Hero.module.scss";
import Image from "next/image";
import { useLanguageStore } from "@/stores/useLanguageStore";

const Hero = () => {
	const { data } = useGetTicherQuery();

	const { t } = useLanguageStore();

	const handleFileClick = (fileUrl: any) => {
		if (fileUrl) {
			window.open(fileUrl, "_blank");
		}
	};

	return (
		 <div className={scss.Hero}>
			<div className="container">
			<h1 style={{textAlign:"center"}}>{t("Teacher.title")}</h1>
			<div className={scss.cards}>
			{data?.map((el, index) => (
				<div key={index} className={scss.card}>
					<div className={scss.image}>
						<Image
							className={scss.img}
							src={el.image}
							alt={el.fullname}
							width={500}
							height={350}
							objectFit="cover"
						/>
					</div>

					<h1>{el.fullname}</h1>
					<h3>{el.lesson}</h3>
					<h3>{el.experience}</h3>

					<button
						style={{
							border: "none",
							fontSize: "22px",
							background: "white",
							cursor: "pointer",
						}}
						onClick={() => handleFileClick(el.file)}>
					   Резюме
					</button>
				</div>
			))}
			
			
		</div>
			</div>
		 </div>
	);
};

export default Hero;
