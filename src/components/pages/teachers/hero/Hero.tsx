"use client";
import {  useGetTicherQuery } from "@/redux/api/catalog";
import scss from "./Hero.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

const Hero = () => {
	const { data } = useGetTicherQuery();

		const t = useTranslations("Teacher");

		const { locale } = useParams();	

		

	const handleFileClick = (fileUrl: any) => {
		if (fileUrl) {
			window.open(fileUrl, "_blank");
		}
	};

	return (
		 <div className={scss.Hero}>
			<div className="container">
			<h1 style={{textAlign:"center"}}>{t("title")}</h1>
			<div className={scss.cards}>
			{data?.map((el, index) => (
				<div key={index} className={scss.card}>
					<div className={scss.image}>
						<Image
							className={scss.img}
							src={el.image}
							alt="img"
							width={500}
							height={350}
							objectFit="cover"
						/>
					</div>

					<h1>{locale === "kg" ? el.full_name : el.full_name}</h1>
					<h3>{locale === "kg" ? el.lesson_ky : el.lesson_ru}</h3>
					<h3>{locale === "kg" ? el.experience_ky : el.experience_ru}</h3>

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
