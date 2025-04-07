import Hero from '@/components/pages/teachers/hero/Hero';
import { Metadata } from 'next';
import Head from 'next/head';
import React from 'react';


export const metadata: Metadata = {
	title: "Преподаватели",
	 	keywords:
		"Кыргыз,Россия,факультет,Информация",
	robots: "index, follow",
	authors: [{ name: "Преподаватели" }],
	openGraph: {
		title: "Преподаватели",
	 
		url: "https://krf-edu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.aa3b36ce.jpeg&w=1200&q=75",
		type: "website",
	},
};
const TeachersPage = () => {
  return (
    <>
      <Head>
				<link rel="canonical" href="https://krf-edu.vercel.app/" />
				<meta name="author" content="Преподаватели" />

				<meta
					property="og:image"
					content="https://krf-edu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.aa3b36ce.jpeg&w=1200&q=75"
				/>

				<meta property="og:type" content="website" />

			 
			</Head>
      <Hero/>
    </>
  );
};

export default TeachersPage;