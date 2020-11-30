// Заголовок
import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderNews from './HeaderNews';
import HeaderSide from './HeaderSide';

export default function Header(props) {
    const { data } = props;
    
    return (<React.Fragment>
        <HeaderTitle data = {data.headerTitle}/>
        <div className='header-news'>
            <HeaderNews data = {data.headerNews}  />
            <HeaderSide />
        </div>
        {/* <HeaderCurs/> */}
    </React.Fragment>
    )

}