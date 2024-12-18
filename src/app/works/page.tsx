import Hero from "@/components/pages/works/hero/Hero";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";


export const metadata: Metadata = {
	title: "Научные работы",
	 	keywords:
		"Кыргыз,Россия,факультет,Информация",
	robots: "index, follow",
	authors: [{ name: "Научные работы" }],
	openGraph: {
		title: "Научные работы",
	 
		url: "https://krf-edu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.aa3b36ce.jpeg&w=1200&q=75",
		type: "website",
	},
};


const WorksPage = () => {
	return (
		<div>
			<Head>
				<link rel="canonical" href="https://krf-edu.vercel.app/" />
				<meta name="author" content="Научные работы" />

				<meta
					property="og:image"
					content="https://krf-edu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.aa3b36ce.jpeg&w=1200&q=75"
				/>

				<meta property="og:type" content="website" />
			</Head>

			<Hero />
		</div>
	);
};

export default WorksPage;
