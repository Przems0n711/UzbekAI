import { createContext, useState } from "react";

const languageToEmoji = {
  "en" : "🇬🇧",
  "pl" : "🇵🇱",
  "uz" : "🇺🇿"
};
const LanguageContext = createContext();

export const LanguageProvider = ({ dictionary, defaultLanguage, children }) => {
  const languages = Object.keys(dictionary);

  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

  const t = (sectionName) => {
    return (
      dictionary[selectedLanguage][sectionName] ||
      dictionary[defaultLanguage][sectionName] ||
      sectionName
    );
  };
  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        languages,
        t,
        setSelectedLanguage,
        languageToEmoji,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
