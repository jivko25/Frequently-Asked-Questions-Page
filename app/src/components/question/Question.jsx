import styles from './Question.module.scss';

export default function Question({title, content, itemIndex, isSelected, onSelect}) {
    const onClick = () => {
        isSelected == true ? onSelect(null) : onSelect(itemIndex);
        console.log(itemIndex);
    }
    return(
        <div className={styles.wrapper} onClick={onClick}>
            <div className={isSelected ? styles['title-wrapper-selected'] : styles['title-wrapper']}>
                <div className={styles.title}>
                    <h1>{title}</h1>
                </div>
                <button>&#9660;</button>
            </div>
            <div className={isSelected ? styles['content-wrapper-visible'] : styles['content-wrapper-hidden']}>
                <p>{content}</p>
            </div>
        </div>
    )
}