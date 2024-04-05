import "./Body.scss";
import React, { useState, useContext, useRef } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import OpenAI from "openai";

const Header = () => {
  const { t } = useContext(LanguageContext);
  const [response, setResponse] = useState([]);
  const inputRef = useRef();

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInput = inputRef.current.value;

    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }],
      });

      setResponse([...response, chatCompletion.choices[0].message]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="body">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="userInput"
          placeholder={t("search")}
          className="input"
          ref={inputRef}
          required
        />
        <button type="submit" className="input submit">
          {"->"}
        </button>
      </form>
      {response.length > 0 && (
        <div className="response">
          <strong>AI Response:</strong> {response[0].content}
        </div>
      )}
    </div>
  );
};

export default Header;
