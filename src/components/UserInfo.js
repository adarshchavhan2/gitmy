import React from "react";
import { Link } from "react-router-dom";
import Info from "../style/Info";

export default function UserInfo({ data }) {
  const {
    name,
    login,
    avatar_url,
    html_url,
    company,
    location,
    created_at,
    public_repos,
    followers,
    following,
  } = data;

  return (
    <Info>
      <Link className="back-btn" to="/">
        <span className="iconify" data-icon="akar-icons:home"></span>
      </Link>

      <img src={avatar_url} className="avatar" alt="profile img" />
      <h2 className="name">{name}</h2>
      <a href={html_url}>
        <h3 className="username">@{login}</h3>
      </a>
      <ul className="info">
        {company !== null && (
          <li>
            <span className="iconify" data-icon="ic:round-work-outline"></span>
            <span className="text">{company}</span>
          </li>
        )}
        {location !== null && (
          <li>
            <span className="iconify" data-icon="akar-icons:location"></span>
            <span className="text">{location}</span>
          </li>
        )}

        <li>
          <span className="iconify" data-icon="uil:calender"></span>
          <span className="text">joined {created_at.slice(0, 10)}</span>
        </li>
      </ul>

      <ul className="brief">
        <li>
          <h2 className="no">{public_repos}</h2>
          <small className="text">REPOSITORIES</small>
        </li>
        <li>
          <h2 className="no">{followers}</h2>
          <small className="text">FOLLOWERS</small>
        </li>
        <li>
          <h2 className="no">{following}</h2>
          <small className="text">FOLLOWING</small>
        </li>
      </ul>
    </Info>
  );
}
