import React from 'react';
import './Title.css';
import { TitleType } from '../../../utils/type';

const  Title:React.FC<TitleType> = ({text , title})=>{
  return (
    <div className="title_content">
        <span className="title_text">{text}</span>
        <h3 className="title">{title}</h3>
    </div>
  )
}

export default Title