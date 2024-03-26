"use client";

import { useEffect, useState } from "react";
import { Container } from "./styles";
import axios from "axios";
import { Card } from "../Card";
type RequestPublications = {
  ID: string;
  Title: string;
  Text: string;
  Image: string;
};

export function BlogPublications() {
  const [render, setRender] = useState<RequestPublications[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5473/api/publications")
      .then((res) => {
        setRender(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div className="impact">Blog</div>
      <div className="flex">
        {render.map((item: RequestPublications, index) => {
          return (
            <Card
              key={index}
              title={item.Title}
              text={item.Text}
              img={item.Image}
            />
          );
        })}
      </div>
    </Container>
  );
}
