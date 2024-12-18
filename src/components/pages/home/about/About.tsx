"use client";
import React, { useState } from "react";
import Image from "next/image";
import scss from "./About.module.scss";

import aboutimg from "@/assets/images/about.jpg";
import about_boy from "@/assets/images/about-boy.jpg";
import about_tich from "@/assets/images/about-ticher.jpg";
import { useLanguageStore } from "@/stores/useLanguageStore";

const About = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const { t } = useLanguageStore();

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

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
						<h1>{t("About.title")}</h1>

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
								<h1>{t("About.boy")}</h1>
								<h1>605</h1>
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
								<h1>{t("About.tich")}</h1>

								<h1>38</h1>
							</div>
						</div>

						<div className={scss.btn}>
							<button onClick={openModal}>{t("About.btn")}</button>
						</div>
					</div>
				</div>
			</div>

			{/* Модальное окно */}
			{isModalOpen && (
				<div className={scss.modal_overlay}>
					<div className={scss.modal_content}>
						<button className={scss.close_btn} onClick={closeModal}>
							 {t("About.close")}
						</button>
						<p>
							 {t("About.text")}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default About;
