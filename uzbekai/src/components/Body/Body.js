import "./Body.scss";
import React from "react";
import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";

const Header = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div className="body">
      <form className="form" action="#">
        <input placeholder={t("search")} className="input" />
        <input className="input submit" type="submit" value="->" />
      </form>
    </div>
  );
};

export default Header;
