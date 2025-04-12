'use client'
import { useGetNewsQuery } from "@/redux/api/catalog";
import scss from "./NewsDetails.module.scss";
import Image from "next/image";
import { useParams } from "next/navigation";

const NewsDetails = () => {
	const { data } = useGetNewsQuery();
	const { locale } = useParams();

  const { id } = useParams();
	const newsItem = data?.find(el => el.id.toString() === id);

	if (!newsItem) return <div>Loading...</div>;


	return (
		<div className={scss.NewsDetails}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.block}>
							<div className={scss.box}>
                <div className={scss.image}>
                <Image fill objectFit="cover" src={newsItem.image} alt="img" />

                </div>
								 <h2>{locale === "kg" ? newsItem.title_ky : newsItem.title_ru}</h2>
								<p>{locale === "kg" ? newsItem.description_ky : newsItem.description_ru}</p>
							</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
