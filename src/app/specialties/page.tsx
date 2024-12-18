import Hero from '@/components/pages/specialties/hero/Hero';
import { Metadata } from 'next';
import Head from 'next/head';
import React from 'react';


export const metadata: Metadata = {
	title: "Специальности",
	 	keywords:
		"Кыргыз,Россия,факультет,Информация",
	robots: "index, follow",
	authors: [{ name: "Специальности" }],
	openGraph: {
		title: "Специальности",
	 
		url: "https://krf-edu.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.aa3b36ce.jpeg&w=1200&q=75",
		type: "website",
	},
};

 

const SpecialtiesPage = () => {
  return (
    <>
    <Head>
				<link rel="canonical" href="https://krf-edu.vercel.app/" />
				<meta name="author" content="Специальности" />

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

export default SpecialtiesPage;