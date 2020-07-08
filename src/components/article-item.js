import React from 'react';
import { Card } from '../ui/card';
import {Link} from "react-router-dom"
import User from './user';

function ArticleItem({
  author,
  description,
  createdAt,
  slug,
  title
}) {
  return <Card>
    <section >
      <User image={author.image} username={author.username}>
        <span>{createdAt}</span>
      </User>
    </section>
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link to={`/articles/${slug}`}>Read more..</Link>
    </section>
  </Card>
}

export default ArticleItem;
