import React from "react";
import './Article.scss';

interface ArticleProps { 
  title?: string;
  text: string;
}

const Article: React.FunctionComponent<ArticleProps> = ({title, text}) => {
  return (
    <article>
      {title && <h4>{title}</h4>}
      <p>
       {text}
      </p>
    </article>
  );
};

export default Article;
