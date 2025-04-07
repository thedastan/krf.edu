"use client";
import { useGetSpesQuery } from "@/redux/api/catalog";
import scss from "./Hero.module.scss";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";


const Hero = () => {
	const { data } = useGetSpesQuery();
		const t = useTranslations("Spec");
	const router = useRouter();
	return (
		<div className={scss.Hero}>
			<div className="container">
				<h1 style={{textAlign:"center"}}>{t("title")}</h1>
				<div className={scss.content}>
					{data?.map((el, index) => (
						<h1 onClick={() => router.push(`specialties/${el.id}`)} key={index}>
							{el.title}
						</h1>
					))}
					
					
				</div>
			</div>
		</div>
	);
};

export default Hero;
