import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export const Post = ({ author, role, img, publishedAt, content }) => {
    const  [comments, setComments] = useState([
        "Post muito bom!"
    ]);

    const [newComment, newSetComment] = useState('')

    const dateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true

    })

    function handleSubmit(){
        event.preventDefault();

        setComments([...comments, newComment])
        newSetComment('')
        
    
    }

    function handleComment(){
        newSetComment(event.target.value)
        
    }

    function deleteComment(commentToDelete){
        const newComment = comments.filter(comment =>  {
            return comment !== commentToDelete;
        })

        setComments(newComment)
    }

    const isNewCommentEmpty = newComment.length === 0


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={img} />
                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>{role}</span>
                    </div>
                </div>

                <time title={dateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedAtRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>
                {content.map((line) => {
                    if (line.type === "paragraph") {
                       return <p key={line.content}>{line.content}</p>
                    } else if (line.type === "link") {
                        return  <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>


            <form onSubmit={handleSubmit} className={styles.form}>
                <strong>Deixe seu feedback</strong>
                <textarea
                onChange={handleComment}
                value={newComment}
                required
               
                placeholder='deixe um comentario'></textarea>
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
              {comments.map((comment) => {
                return <Comment 
                key={comment} 
                content={comment}
                 deleteComment={deleteComment}
                 />
              })}
            </div>
        </article >
    )
}