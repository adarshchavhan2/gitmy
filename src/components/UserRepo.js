import React, { useEffect, useState } from "react";
import axios from "axios";
import Repo from "../style/Repo";

export default function UserRepo({ repos_url }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(repos_url)
      .then((response) => setRepos(response.data))
      .catch((err) => console.clear());
  }, [repos_url]);

  return (
    <Repo className="bottom-section">
      <h2>All Repos</h2>
      <div className="repo-wrapper">
        {Array.from(repos).map((repo) => {
          const {
            id,
            name,
            description,
            language,
            stargazers_count,
            forks_count,
            size,
          } = repo;

          return (
            <div className="repo" key={id}>
              <div className="heading">
                <span className="iconify" data-icon="iconoir:repository"></span>
                <h3 className="text">{name}</h3>
              </div>
              <p className="description">{description}</p>
              <div className="more">
                <div className="left">
                  <span className="inner">
                    <span className="iconify" data-icon="ci:dot-05-xl"></span>
                    <small className="text">{language}</small>
                  </span>
                  <span className="inner">
                    <span
                      className="iconify"
                      data-icon="ant-design:star-filled"
                    ></span>
                    <small className="text">{stargazers_count}</small>
                  </span>
                  <span className="inner">
                    <span className="iconify" data-icon="charm:git-fork"></span>
                    <small className="text">{forks_count}</small>
                  </span>
                </div>
                <small className="right">{size}KB</small>
              </div>
            </div>
          );
        })}
      </div>
    </Repo>
  );
}
