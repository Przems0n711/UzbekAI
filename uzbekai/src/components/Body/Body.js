import "./Body.scss";
import React, { useState, useContext, useRef } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import OpenAI from "openai";

const Header = () => {
  const { t } = useContext(LanguageContext);
  const [chatMessages, setChatMessages] = useState([]);
  const inputRef = useRef();

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInput = inputRef.current.value;

    setChatMessages([...chatMessages, { role: "user", content: userInput }]);
    inputRef.current.value = "";

    setTimeout(async () => {
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userInput }],
      });

      setChatMessages([
        ...chatMessages, 
        chatCompletion.choices[0].message 
        ]);
    
    } catch (e) {
      console.log(e);
    }}, 5000);
  };

  return (
    <div className="body">
      {console.log(chatMessages)}
      <div className="chat"> 
        {chatMessages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">{t("send")}</button>
      </form>
    </div>
  );
};

export default Header;
