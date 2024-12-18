'use client'
import { FC, ReactNode } from "react";
import scss from "./LayoutPage.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import ReduxProvider from "@/providers/ReduxProvidex";



interface LayoutPageProps {
	children: ReactNode;
}

const LayoutPage: FC<LayoutPageProps> = ({ children }) => {
	return (
		<div className={scss.LayoutPage}>
			 <ReduxProvider> 
			<Header />
			<main>{children}</main>
			<Footer />
			</ReduxProvider>
		</div>
	);
};

export default LayoutPage;
