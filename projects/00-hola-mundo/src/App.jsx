import React from 'react'
import './App.css'

function App()
{
    return (
        <article className='tw-followCard'>
            <header>
                <img src="https://unavatar.io/microlink/microlink.io" alt="El avatar de ejemplo" />
                <div>
                    <strong>Edgar Ontiveros</strong>
                    <span>@edgarontiveros</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
export default App;