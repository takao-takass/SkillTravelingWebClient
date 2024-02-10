import React from 'react';
import Top from './Top/Index';
{/*import RecipeTitle from './RecipeTitle';*/}
{/*import './index.css';*/}

function App() {

    // urlのパスを取得
    const path = window.location.pathname;
    console.log(path);

    /*
    // パスによって表示を変える
    if (path === '/history') {
        return <History />;
    } else {
        return <Top />;
    }*/

    return (
        <article>
            <Top />
        </article>
    )
}

export default App;