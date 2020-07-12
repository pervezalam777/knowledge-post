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
    <div className="user-profile">
      <User image={author.image} username={author.username}>
        <small>{dateFormat(createdAt)}</small>
      </User>
    </div>
    <div>
      <h5 className="article-title">{title}</h5>
      <p className="text-secondary article-description">{description}</p>
      <Link className="read-more" to={`/articles/${slug}`}>Read more..</Link>
    </div>
  </Card>
}

export default ArticleItem;
