import React from "react";
import { useEffect, useState } from "react";
import { format } from "timeago.js";

export default function VideosComponent() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=dhoni&key=AIzaSyC7WVriuIPkg49pzPFCIwUahZ1tQUcT0BQ&type=video&order=relevance"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div>Video Component</div>
    </>
  );
}
