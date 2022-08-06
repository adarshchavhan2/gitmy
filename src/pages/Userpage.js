import React, { useEffect, useState } from "react";
import Error from "../components/Error";
import UserInfo from "../components/UserInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import UserRepo from "../components/UserRepo";

export default function Userpage() {
  const { param } = useParams();
  const [Found, setFound] = useState(false);
  const [NotFound, setNotFound] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    document.title = `Gitmy - ${param}`;

    axios(`https://api.github.com/users/${param}`)
      .then((response) => {
        setFound(true);
        setData(response.data);
      })
      .catch((err) => {
        setNotFound(true);
        console.clear();
      });
  }, [param]);

  return (
    <div>
      {Found && (
        <>
          <UserInfo data={data} />
          <UserRepo repos_url={data.repos_url} />
        </>
      )}

      {NotFound && <Error />}
    </div>
  );
}
