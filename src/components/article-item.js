import React from 'react';
import { Card } from '../ui/card';
import {Link} from "react-router-dom"
import User from './user';
import { dateFormat } from '../utility/util';

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
        <small className="text-muted" >{dateFormat(createdAt)}</small>
      </User>
    </section>
    <section>
      <h2>{title}</h2>
      <p className="text-secondary">{description}</p>
      <Link to={`/articles/${slug}`}>Read more..</Link>
    </section>
  </Card>
}

export default ArticleItem;
