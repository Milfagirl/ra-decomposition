import React from 'react';
import ContentList from './ContentList';
import ContentInput from './ContentInput';
export default function Content(props) {
    const {data} = props;

    return (
        <div className='content'>
           <ContentList data = {data.contentList} />
           <ContentInput data = {data.contentInput} />
        </div>
    )
}