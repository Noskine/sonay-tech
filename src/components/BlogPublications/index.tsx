'use client'

import { useEffect, useState } from 'react';
import { Container } from './styles';
import axios from 'axios';
import { Card } from '../Card';
type RequestPublications = {
  ID: string
  Title: string
  Text: string
  ImageURL: string
}

export function BlogPublications() {
  const [render, setRender] = useState<RequestPublications[]>([])

  useEffect(() => {
    axios.get("https://api-pilot.onrender.com/public/publications")
      .then(res => {
        setRender(res.data);
      }).catch(err => console.log(err))
  }, [])

  return (
    <Container>
      {
        render.map((item: RequestPublications, index) => {
          return (
            <Card
              key={index}
              title={item.Title}
              text={item.Text}
              img={item.ImageURL}
            />
          )
        })
      }
    </Container>
  );
}
