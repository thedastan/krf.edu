"use client";
import { useGetDepartamentQuery, useGetIlimQuery } from "@/redux/api/catalog";
import scss from "./Hero.module.scss";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "@/stores/useLanguageStore";


const Hero = () => {
	const { data } = useGetDepartamentQuery();

	const { t } = useLanguageStore();
	
	const router = useRouter();
	return (
		<div className={scss.Hero}>
			<div className="container">
			<h1 style={{textAlign:"center"}}>{t("Dep.title")}</h1>
				<div className={scss.content}>
					{data?.map((el, index) => (
						<h1 onClick={() => router.push(`departments/${el.id}`)} key={index}>
							{el.which_dep}
						</h1>
					))}
					
				</div>
			</div>
		</div>
	);
};

export default Hero;
