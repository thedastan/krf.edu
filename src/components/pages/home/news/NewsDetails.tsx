'use client'
import { useGetNewsQuery } from "@/redux/api/catalog";
import scss from "./NewsDetails.module.scss";
import Image from "next/image";
import { useParams } from "next/navigation";

const NewsDetails = () => {
	const { data } = useGetNewsQuery();

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
 								<h1>{newsItem.title}</h1>
								<p>{newsItem.description}</p>
							</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsDetails;
