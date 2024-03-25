import "./Body.scss";
import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import LanguageContext from "../../contexts/LanguageContext";

const Header = () => {
  const { t } = useContext(LanguageContext);
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userInput = event.target.elements.userInput.value;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        { prompt: userInput },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer api_key",
          },
        }
      );

      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error("Error fetching response from API:", error);
    }
  };

  return (
    <div className="body">
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="userInput"
          placeholder={t("search")}
          className="input"
          required
        />
        <button type="submit" className="input submit">
          {"->"}
        </button>
      </form>
      {response && (
        <div className="response">
          <strong>AI Response:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default Header;
