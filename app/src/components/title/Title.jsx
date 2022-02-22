import styles from './Title.module.scss';

export default function Title({content, subContent}){
    return(
        <div className={styles.wrapper}>
            <h1>{content}</h1>
            <h5>{subContent}</h5>
        </div>
    )
}