import React from 'react';
import { Card } from '../ui/card';
import {Link} from "react-router-dom"

function ArticleItem() {
  return <Card>
    <section >
      <img src="" alt="" />
      <span>{'Author Name'}</span>
      <span>{'July 4, 2020'}</span>
    </section>
    <section>
      <h2>{'Blog title'}</h2>
      <p>{'Description'}</p>
      <Link to={`/articles/${'id'}`}>Read more..</Link>
    </section>
  </Card>
}

export default ArticleItem;
