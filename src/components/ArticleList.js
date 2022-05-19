import React from 'react';
import Article from "./Article";

function ArticleList({posts}) {
    
    const renderArticle= posts.map(post => {
        const {id, title, date, preview, minutes} = post;


        return (
        <Article key={id}
        title={title}
        date= {date}
        minutes= {minutes}
        preview= {preview} />)})

  return (
    <main>
        {renderArticle}
    </main>
  )
}

export default ArticleList