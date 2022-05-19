import React from 'react'

function Article({id, title, date= "January 1, 1970", preview, minutes}) {
    console.log(title)

const renderEmoji= (minutes) => {
    if (minutes < 30) {
        return Math.ceil(minutes/5)
    // } else if {
    //     return Math.ceil(minutes/10)
    }
}    

  return (
   <article>
       <h3>{title}</h3>
       <small>{date} {renderEmoji(minutes)}</small>
       <p>{preview}</p>
   </article>
  )
}

export default Article