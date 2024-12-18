import { useLanguageStore } from '@/stores/useLanguageStore';
import scss from './Header.module.scss';

const Language = () => {
  const { language, setLanguage } = useLanguageStore();

	const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLanguage = e.target.value as "kg" | "ru";
		setLanguage(selectedLanguage);
	};

  return (
    <div className={scss.language}>
							<select
								className={scss.languageSelect}
								onChange={handleChangeLanguage}
								value={language}>
								<option className={scss.languageOption} value="kg">
									kg
								</option>
								<option className={scss.languageOption} value="ru">
									ru
								</option>
							</select>

						  
						</div>
  );
};

export default Language;