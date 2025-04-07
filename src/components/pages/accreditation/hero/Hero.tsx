"use client";
import { useGetAccQuery, useGetIlimQuery } from "@/redux/api/catalog";
import scss from "./Hero.module.scss";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Hero = () => {
	const { data } = useGetAccQuery();

	const t = useTranslations("Acc");

	const router = useRouter();
	return (
		<div className={scss.Hero}>
			<div className="container">
				<h1 style={{ textAlign: "center" }}>{t("title")}</h1>
				<div className={scss.content}>
					{data?.map((el, index) => (
						<h1
							onClick={() => router.push(`accreditation/${el.id}`)}
							key={index}>
							{el.title}
						</h1>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hero;
