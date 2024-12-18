"use client";
import { useGetIlimQuery } from "@/redux/api/catalog";
import scss from "./Hero.module.scss";
import { useRouter } from "next/navigation";


const Hero = () => {
	const { data } = useGetIlimQuery();
	
	const router = useRouter();
	return (
		<div className={scss.Hero}>
			<div className="container">
				<div className={scss.content}>
					{data?.map((el, index) => (
						<h1 onClick={() => router.push(`works/${el.id}`)} key={index}>
							{el.title}
						</h1>
					))}
					
				</div>
			</div>
		</div>
	);
};

export default Hero;
