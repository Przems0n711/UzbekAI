import "./Body.scss";
import React, { useState, useContext, useRef, useEffect } from "react";
import LanguageContext from "../../contexts/LanguageContext";
import OpenAI from "openai";

const Header = () => {
  const { t } = useContext(LanguageContext);
  const [chatMessages, setChatMessages] = useState([
    {role: 'assistant', content: 'Hello! How can I assist you today?'}]);
  const [waitingForResponse, setWaitingForResponse] = useState(false);
    const inputRef = useRef();
  const chatRef = useRef(null);
  
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInput = inputRef.current.value;
  
    setWaitingForResponse(true);
    setChatMessages([...chatMessages, { role: "user", content: userInput }]);
    inputRef.current.value = "";
  
    try {
      console.log(chatMessages)
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [...chatMessages, { role: "user", content: userInput } ],
      });

      setChatMessages([
        ...chatMessages, 
        { role: "user", content: userInput }, 
        chatCompletion.choices[0].message 
        ]);
    
    } catch (e) {
      console.log(e);
    }
    setWaitingForResponse(false);
  }
  

  return (
    <div className="body">
      <div className="chat" ref={chatRef}> 
        {chatMessages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
        {waitingForResponse  && (
          <div className="assistant typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
          )}
      </div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" />
        <button type="submit">{t("send")}</button>
      </form>
    </div>
  );
};

export default Header;
 