"use client";
import { useState } from "react";
import scss from "./News.module.scss";
import { useGetNewsQuery } from "@/redux/api/catalog";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const News = () => {
	const t = useTranslations("News");
	const { data } = useGetNewsQuery();

	return (
		<div className={scss.News}>
			<div className="container">
				<h1>{t("title")}</h1>
				<div className={scss.contant}>
					{data?.map((el, index) => (
						<Link key={index} href={`/${el.id}`}>
							<div className={scss.box}>
								<div className={scss.image}>
									<Image
										className={scss.img}
										src={el.image}
										alt="img"
										width={500}
										height={350}
										objectFit="cover"
									/>
								</div>
								<h2>{el.title}</h2>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default News;
