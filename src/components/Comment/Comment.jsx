import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';
import styles from './styles.module.css';

export const Comment = ({content, deleteComment}) => {
    const [like, setLikeCount] = useState(0)
    function handleDeletComment(){
        deleteComment(content)
    }

 
    return (
        <div className={styles.comment}>
         <Avatar hasBorder={false} src="https://github.com/jeymes.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Willian Pereira</strong>
                            <time title="2 de janeiro ás 15:13" dateTime='2023-01-01 15:14:34'>
                                cerca de uma hora  1h atras
                            </time>
                        </div>
                        <button onClick={handleDeletComment} title="Deletar Comentario">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                  <button onClick={() => setLikeCount(like + 1)}>
                    <ThumbsUp/>
                     curtir <span>{like}</span>
                  </button>
                </footer>
            </div>
        </div>
    )
}