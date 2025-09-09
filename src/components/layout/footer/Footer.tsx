'use client'
import Image from "next/image";
import scss from "./Footer.module.scss";

import logo from "@/assets/images/logo.jpeg";
import Link from "next/link";
import {
	FaInstagram,
	FaPhoneAlt,
	FaTelegram,
	FaWhatsapp,
} from "react-icons/fa";
import {
	EMAIL_ADDRESS,
	EMAIL_ADDRESS_LINK,
	FACEBOOK_LINK,
	INSTAGRAM_LINK,
	PHONE_NUMBER,
	WHATSAPP_LINK,
} from "@/constants/admin";
import { useTranslations } from "next-intl";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
		const t = useTranslations("Footer");
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.block}>
						<div className={scss.box}>
							<div className={scss.image}>
								<Image
									style={{ width: "100%", height: "100%", borderRadius: "50%" }}
									src={logo}
									alt="img"
								/>
							</div>
							<Link className={scss.link} href={"/"} target={"_blank"}>
								<span>
									<FaPhoneAlt />
								</span>{" "}
								{PHONE_NUMBER}
							</Link>
						</div>
						<div className={scss.box2}>
							<Link
								className={scss.link}
								href={EMAIL_ADDRESS_LINK}
								target={"_blank"}>
								{EMAIL_ADDRESS}
							</Link>
						</div>
						<div className={scss.box3}>
							 
							<h1>{t("sos")}</h1>

							<div className={scss.icons}>
								<Link
									className={scss.link}
									href={INSTAGRAM_LINK}
									target={"_blank"}>
									<FaInstagram />
								</Link>
								<Link
									className={scss.link}
									href={WHATSAPP_LINK}
									target={"_blank"}>
									<FaWhatsapp />
								</Link>
								<Link
									className={scss.link}
									href={FACEBOOK_LINK}
									target={"_blank"}>
									<CiFacebook />
								</Link>
							</div>
						</div>
					</div>


          <div className={scss.line}></div>
          

          <div className={scss.block2}>
            <p>{t("prava")}</p>
          </div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
