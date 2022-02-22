import logo from './logo.svg';
import styles from './App.module.scss';
import Question from './components/question/Question';
import Title from './components/title/Title'
import { useState } from 'react';
import {data} from './data/Data';

function App() {
  const [selectedItemIndex, setSelectedItemIndex] = useState();
  return (
    <div className={styles.wrapper}>
      <Title content='Frequently asked questions' subContent='Hello! Didnt you find what you are looking for? Please contact us.'/>
      <div className={styles.questions}>
        {
          data.map((item, index) => {
            return <Question key={item.title} title={item.title} content={item.content} itemIndex={index} isSelected={index === selectedItemIndex} onSelect={(id) => setSelectedItemIndex(id)}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
