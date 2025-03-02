"use client";
import { useGetAdminQuery } from "@/redux/api/catalog";
import scss from "./Hero.module.scss";
import { useRouter } from "next/navigation";
// import { useLanguageStore } from "@/stores/useLanguageStore";

const Hero = () => {
	const { data } = useGetAdminQuery();

	// const { t } = useLanguageStore();

	const router = useRouter();
	return (
		<div className={scss.Hero}>
			<div className="container">
				{/* <h1 style={{ textAlign: "center" }}>{t("Works.title")}</h1> */}
				<div className={scss.content}>
					{data?.map((el, index) => (
						<h1 onClick={() => router.push(`administration/${el.id}`)} key={index}>
							{el.fullname}
						</h1>
					))}
					
				</div>
			</div>
		</div>
	);
};

export default Hero;
