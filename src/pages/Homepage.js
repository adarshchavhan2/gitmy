import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from '../style/Home'

export default function Homepage() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  document.title = "Welcome to Gitmy";

  return (
    <Home>
      <span className="iconify" data-icon="uim:github-alt"></span>
      <h3 className="tagline">Find your Profile</h3>
      <input
        type="text"
        className="search-bar"
        value={text}
        onChange={(e) => setText(e.target.value.toLocaleLowerCase())}
        onKeyDown={(e) => e.key === "Enter" && navigate(`/${text}`)}
      />
    </Home>
  );
}
