import scss from "./Hero.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Hero = () => {
	// const { t } = useLanguageStore();
	 
	const t = useTranslations("Hero");

	return (
		<div className={scss.Hero}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.text}>
						<h1>{t("title")}</h1>
						<p>{t("desc")}</p>
						 <Link href={"#about"}>
						 <div className={scss.btn}>
							<div className={scss.box}></div>
							 
							<h2>{t("btn")}</h2>
							<h3><FaArrowRightLong /></h3>
						</div></Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
