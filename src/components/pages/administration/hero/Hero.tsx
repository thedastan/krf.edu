"use client";
import { useGetAdminQuery } from "@/redux/api/catalog";
import scss from "./Hero.module.scss";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
// import { useLanguageStore } from "@/stores/useLanguageStore";

const Hero = () => {
	const { data } = useGetAdminQuery();

	const { locale } = useParams();	

	

	const router = useRouter();
	return (
		<div className={scss.Hero}>
			<div className="container">
				{/* <h1 style={{ textAlign: "center" }}>{t("Works.title")}</h1> */}
				<div className={scss.content}>
					{data?.map((el, index) => (
						<h1 onClick={() => router.push(`administration/${el.id}`)} key={index}>
							{locale === "kg" ? el.fullname_ky : el.fullname_ru}
						</h1>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hero;
