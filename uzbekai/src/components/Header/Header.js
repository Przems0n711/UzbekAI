import "./Header.scss";
import React from "react";
import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";

const Header = () => {
   const { selectedLanguage, languages, setSelectedLanguage, t } =
    useContext(LanguageContext);

  return (
    <header>
      <h1>{t("header")} UzbekAI</h1>


      <div className="languages">
        {languages.map((l) => (
            <li className={`language  ${l === selectedLanguage ? 'selected' : ''}`}>
            <button onClick={() => setSelectedLanguage(l)}>{l}</button>
            </li>
        ))}
      </div>
    </header>
  );
};

export default Header;
