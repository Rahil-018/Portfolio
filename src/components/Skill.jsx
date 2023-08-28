import React, { useState } from 'react';
const Skill = (props) => {
    // for uppercase
    const uppercase = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    // for lowercase
    const lowercase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    // for cleartext
    const cleartext = () => {
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    // for copy text
    const copytext = () => {
        navigator.clipboard.writeText(text);
    }
    // for extra space
    const extraspace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState('');
    return (
        <>
            <div style={{ height: '45rem' }}>
            <h1 align="center" className='m-3' ><b>WELCOME TO MY PROFILE</b></h1>
                <h1 align="center"  className='m-3 text-black'>TEXT FORM</h1>
                <div className="container " >
                    <h1 className='mb-4'>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} rows="8" style={{ backgroundColor: 'white', color: 'black' }}></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-4 my-2" onClick={uppercase}>Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-secondary mx-4 my-2" onClick={lowercase}>Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-danger mx-4 my-2" onClick={cleartext}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-warning mx-4 my-2" onClick={copytext}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-success mx-4 my-2" onClick={extraspace}>Remove Extra Spaces</button>
                </div>
                <div className="container my-3 ">
                    <h2 className='text-black'>Counter And Reader</h2>
                    <p className='text-black'>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                    <p className='text-black'>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                    <h2 className='text-black'>Preview</h2>
                    <p className='text-black'>{text.length > 0 ? text : "Nothing to preview!"}</p>
                </div>
            </div>
            
            <div style={{ height: '100%' }}>
                <h3 align="center"><u>MY KEY SKILLS </u></h3>
                <div className="m-3 row row-cols-1 row-cols-md-3 g-3 text-bg-white p-5" align="center" >
                    <div className="col g-1 ">
                        <div className="card">
                            <img src="data:image/jpeg;base64,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
                            k5PMnkAA3NQAAADJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z" height={'250px'} width={''} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">JAVASCRIPT</h5>
                                <p className="card-text">JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.
                                    While it is most well-known as the scripting language for Web pages, many non-browser environments also use it.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col g-1" >
                        <div className="card g-1">
                            <img src="https://th.bing.com/th/id/OIP.5PxGgx_aOWpTkul_D3nnbwAAAA?w=335&h=185&c=7&r=0&o=5&pid=1.7" height={'275px'} width={''} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">REACT.JS</h5>
                                <p className="card-text">React is a JavaScript library for building user interfaces. React is used to build single-page applications.
                                    React allows us to create reusable UI .</p>
                            </div>
                        </div>
                    </div>
                    <div className="col g-1">
                        <div className="card g-1" >
                            <img src="https://th.bing.com/th/id/OIP.qSEVaVVA0jHNSqSm8lARfgHaFb?w=284&h=209&c=7&r=0&o=5&pid=1.7" height={'250px'} width={''} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">HTML5</h5>
                                <p className="card-text">HTML 5 is the fifth and current version of HTML. It has improved the markup available for documents and has
                                    introduced application programming interfaces (API) and Document Object Model (DOM)..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col g-1">
                        <div className="card g-1">
                            <img src="data:image/jpeg;base64,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
                            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAGQABgAAZAAGAABkAAYAAAADIAAwAAMgADAAAyAAMAADIAAAAD//2Q==" height={'230px'} width={''} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">CSS3</h5>
                                <p className="card-text">HTML 5 is the fifth and current version of HTML. It has improved the markup available for documents and has introduced
                                    application programming interfaces (API) and Document Object Model (DOM)..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col g-1">
                        <div className="card g-1">
                            <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/bootstrap-5-vanilla-js.jpg" height={'250px'} width={''} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">BOOTSTRAP</h5>
                                <p className="card-text">Bootstrap utilizes Sass for a modular and customizable architecture. Import only the components you need, enable global options like gradients and shadows</p>
                            </div>
                        </div>
                    </div>
                    <div className="col g-1">
                        <div className="card g-1">
                            <img src="https://th.bing.com/th/id/OIP.Kg9zT4V9CwvPb5eTGc08ZgHaEH?w=262&h=180&c=7&r=0&o=5&pid=1.7" height={'250px'} width={''} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">J-QUERY</h5>
                                <p className="card-text">jQuery is a fast, small, and feature-rich JavaScript library.
                                    It makes things like HTML document traversal and manipulation, event handling, animation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Skill;