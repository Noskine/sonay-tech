"use client";

import { useEffect, useState } from "react";
import { BlogSupenseCard, Container, Laytou } from "./styles";
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
  const [loadingBlog, setLoadingBlog] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5472/api/publications")
      .then((res) => {
        setRender(res.data);
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      setLoadingBlog(true);
    }, 6000);
  }, []);

  if (!loadingBlog) {
    return (
      <Laytou>
        <div className="impact">Blog</div>
        <div className="flex">
          <BlogSupenseCard>
            <section className="img css-selector"></section>
            <div className="text css-selector"></div>
            <div className="text css-selector"></div>
          </BlogSupenseCard>
          <BlogSupenseCard>
            <section className="img css-selector"></section>
            <div className="text css-selector"></div>
            <div className="text css-selector"></div>
            <div className="text css-selector"></div>
          </BlogSupenseCard>
          <BlogSupenseCard>
            <section className="img css-selector"></section>
            <div className="text css-selector"></div>
            <div className="text css-selector"></div>
          </BlogSupenseCard>
          <BlogSupenseCard>
            <section className="img css-selector"></section>
            <div className="text css-selector"></div>
          </BlogSupenseCard>
          <BlogSupenseCard>
            <section className="img css-selector"></section>
            <div className="text css-selector"></div>
            <div className="text css-selector"></div>
            <div className="text css-selector"></div>
          </BlogSupenseCard>
        </div>
      </Laytou>
    );
  } else {
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
}
