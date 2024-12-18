"use client";
import { useState } from "react";
import Image from "next/image";
import scss from "./Header.module.scss";

import logo from "@/assets/images/logo.jpeg";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { useLanguageStore } from "@/stores/useLanguageStore";
import Language from "./Language";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useLanguageStore();
	const closeMenu = () => setIsOpen(false);

	const links = [
		{ title: t("Header.accreditation"), link: "/accreditation" },
		{ title: t("Header.departments"), link: "/departments" },
		{ title: t("Header.research"), link: "/works" },
		{ title: t("Header.specialties"), link: "/specialties" },
	];

	const selectOptions = [
		{ title: t("Header.administration"), link: "/administration" },
		{ title: t("Header.teachers"), link: "/teachers" },
	];

	return (
		<header className={scss.Header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.image}>
					<Link href={"/"}> 
						<Image
							style={{ width: "100%", height: "100%", borderRadius: "50%" }}
							src={logo}
							alt="img"
						/>
						</Link>
					</div>

					{/* Burger Icon */}
					<div
						className={`${scss.burger} ${isOpen ? scss.open : ""}`}
						onClick={() => setIsOpen(!isOpen)}>
						<div></div>
						<div></div>
						<div></div>
					</div>

					{/* Navigation Links */}
					<nav className={`${scss.nav} ${isOpen ? scss.show : ""}`}>
						<div className={scss.image2}>
							<div className={scss.img}>
								 <Link href={"/"}>
								 <Image
									style={{ width: "100%", height: "100%", borderRadius: "50%" }}
									src={logo}
									alt="img"
								/>
								</Link>
							</div>
						</div>

						<Language />
						<div className={scss.customSelect}>
							<div className={scss.selectedContent}>
								<p>{t("Header.facultet")}</p>
								<FaAngleDown className={scss.icon} />
							</div>
							<ul className={scss.options}>
								<div className={scss.option}>
									{selectOptions.map((option, index) => (
										<Link onClick={closeMenu} href={option.link} className={scss.link} key={index}>
											{option.title}
										</Link>
									))}
								</div>
							</ul>
						</div>
						{links.map((el, index) => (
							<Link onClick={closeMenu} key={index} className={scss.link} href={el.link}>
								{el.title}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
