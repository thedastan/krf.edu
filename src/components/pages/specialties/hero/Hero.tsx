"use client";
import { useGetSpesQuery } from "@/redux/api/catalog";
import scss from "./Hero.module.scss";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";


const Hero = () => {
	const { data } = useGetSpesQuery();
	const { t } = useLanguageStore();
	const router = useRouter();
	return (
		<div className={scss.Hero}>
			<div className="container">
				<h1 style={{textAlign:"center"}}>{t("Spec.title")}</h1>
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
