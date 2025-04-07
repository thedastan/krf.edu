"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

import scss from "./Language.module.scss"

const Language = () => {
	const pathname = usePathname();
	const { push: navigate } = useRouter();
	const params = useParams();
	const { locale } = params;
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const options = [
		{ value: "ru", label: "RU" },
		{ value: "kg", label: "KG" },
	];

	const LanguageChange = (newLocale: string) => {
		const newPathname = pathname.replace(`/${params.locale}`, `/${newLocale}`);
		navigate(newPathname);
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	};

	// Закрытие меню при клике вне
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className={scss.Language} ref={menuRef}>
			<button
				className={scss.btn}
				onClick={() => setIsOpen(!isOpen)}>
				{options.find((opt) => opt.value === locale)?.label}
				<span >
					▼
				</span>
			</button>

			{isOpen && (
				<div className={scss.options}>
					{options.map((option) => (
						<div
							key={option.value}
							className={scss.option}
							onClick={() => {
								LanguageChange(option.value);
								setIsOpen(false);
							}}>
							{option.label}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Language;
