"use client";
import React, { useState } from "react";
import Image from "next/image";
import scss from "./About.module.scss";

import aboutimg from "@/assets/images/about.jpg";
import about_boy from "@/assets/images/about-boy.jpg";
import about_tich from "@/assets/images/about-ticher.jpg";
import { useGetStudentQuery, useGetTichCountQuery } from "@/redux/api/catalog";
import { useTranslations } from "next-intl";

const About = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	// const { t } = useLanguageStore();

		const t = useTranslations("About");

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const { data } = useGetStudentQuery();
	const { data: tich } = useGetTichCountQuery();

	return (
		<div id="about" className={scss.About}>
			<div className="container">
				<div className={scss.line}></div>
				<div className={scss.content}>
					<div className={scss.images}>
						<div className={scss.img}>
							<Image
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
								src={aboutimg}
								alt="img"
							/>
						</div>
						<div className={scss.image_box}></div>
					</div>

					<div className={scss.text}>
						<h1>{t("title")}</h1>

						<div className={scss.box}>
							<div className={scss.box_img}>
								<div className={scss.img}>
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={about_boy}
										alt="img"
									/>
								</div>
							</div>

							<div className={scss.text}>
								<h1>{t("boy")}</h1>
								 {data?.map((el,index) => (
									<h1 key={index}>{el.quantity_students}</h1>
								 ))}
							</div>
						</div>

						<div className={scss.box}>
							<div className={scss.box_img}>
								<div className={scss.img}>
									<Image
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
										src={about_tich}
										alt="img"
									/>
								</div>
							</div>

							<div className={scss.text}>
								<h1>{t("tich")}</h1>

								{tich?.map((el,index) => (
									<h1 key={index}>{el.quantity_teachers}</h1>
								 ))}
							</div>
						</div>

						<div className={scss.btn}>
							<button onClick={openModal}>{t("btn")}</button>
						</div>
					</div>
				</div>
			</div>

			{/* Модальное окно */}
			{isModalOpen && (
				<div className={scss.modal_overlay}>
					<div className={scss.modal_content}>
						<button className={scss.close_btn} onClick={closeModal}>
							{t("close")}
						</button>
						<p>{t("text")}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default About;
