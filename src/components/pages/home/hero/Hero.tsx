'use client'
import { useLanguageStore } from "@/stores/useLanguageStore";
import scss from "./Hero.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
	const { t } = useLanguageStore();
	return (
		<div className={scss.Hero}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.text}>
						<h1>{t("Hero.title")}</h1>
						<p>{t("Hero.desc")}</p>
						 <Link href={"#about"}>
						 <div className={scss.btn}>
							<div className={scss.box}></div>
							 
							<h2>{t("Hero.btn")}</h2>
							<h3><FaArrowRightLong /></h3>
						</div></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
