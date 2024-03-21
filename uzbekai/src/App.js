import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import LanguageContext from './contexts/LanguageContext';

function App() {

  const { selectedLanguage, languages, setSelectedLanguage, t } =
    useContext(LanguageContext);

  return (
    <div className="App">
      {languages.map((l) => (
        <li className={l === selectedLanguage ? 'selected' : ''}>
          <button onClick={() => setSelectedLanguage(l)}>{l}</button>
        </li>
      ))}

      <h1>{t('header')}</h1>
    </div>
  );
}

export default App;
