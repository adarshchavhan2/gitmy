import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NotFound from "../style/NotFound";

export default function Error() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    if (count <= 0) {
      clearInterval(interval);
    }
    setTimeout(() => navigate("/"), 5000);
  }, [count]);

  return (
    <NotFound>
      <span className="iconify" data-icon="tabler:error-404"></span>
      <p>User Not Found</p>
      <Link className="btn" to="/">
        Go to Home
      </Link>
      <small>
        You will redireted in <span className="no"> {count}s</span>
      </small>
    </NotFound>
  );
}
