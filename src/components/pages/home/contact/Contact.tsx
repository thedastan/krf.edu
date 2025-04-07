'use client'
import Link from "next/link";
import scss from "./Contact.module.scss";
import { FaInstagram } from "react-icons/fa";
import {
	PHONE_NUMBER,
	PHONE_NUMBER_WHATSAPP,
} from "@/constants/admin";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useTranslations } from "next-intl";
const Contact = () => {

	 const t = useTranslations("Contact");

	return (
		<div className={scss.Contact}>
			<div className="container">
				<h1>{t("title")}</h1>
				<div className={scss.content}>
					<div className={scss.text}>
						<Link className={scss.link} href={"/"}>
							<span>
								<FaInstagram />
							</span>{" "}
							{t("text")}
						</Link>

						<Link className={scss.link} href={"/"}>
							<span>
								<FaInstagram />
							</span>{" "}
							{t("text2")}
						</Link>

						<Link className={scss.link} href={PHONE_NUMBER_WHATSAPP}>
							<span>
								<FaWhatsapp />
							</span>{" "}
							{PHONE_NUMBER}
						</Link>

						<Link className={scss.link} href={PHONE_NUMBER_WHATSAPP}>
							<span>
								<FaLocationDot />
							</span>{" "}
							{t("location")}
						</Link>
					</div>

					<div className={scss.map}>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.194377963102!2d72.82567487634464!3d40.49308457142732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bdaf17c407aee7%3A0xe0ca28cf65e6be55!2sOshSPU!5e0!3m2!1sen!2skg!4v1726984497442!5m2!1sen!2skg"
							style={{
								border: "none",
								height: "100%",
								width: "100%",
							}}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
