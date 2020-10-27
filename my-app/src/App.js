import React, { Fragment, useState } from 'react';
import TextEditor from "./Editor"
import ReactHtmlParser from 'react-html-parser'; 
import { Markup } from 'interweave';

export default function App() {
  const [text, setText] = useState('');
  const parse = require('html-react-parser');

  function math() {
    return (
      <>
        <div>
          <strong>Testing Wiris</strong>
          <math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mfrac><msup><mi>a</mi><mn>3</mn></msup><mfenced><mrow><mi>x</mi><mi>y</mi></mrow></mfenced></mfrac></msqrt><mo>=</mo><mfenced close="|" open="|"><mrow><mo>∞</mo><mo>∅</mo><mi mathvariant="normal">π</mi></mrow></mfenced></math>
        </div>
             
        <div>
            <math class="wrs_chemistry" xmlns="http://www.w3.org/1998/Math/MathML"><mi mathvariant="normal">N</mi><munder><mrow><mo>⇌</mo><mi>Omol</mi><mo>∆</mo><mo>≡</mo><mn>21</mn><mo>,</mo><mn>78</mn></mrow><mi mathvariant="normal">a</mi></munder></math>
        </div>
      </>
    )
  }

  return (
    <div>
      <p>Editor</p>
      <div style={{border: '1px solid #000', marginBottom: '1rem'}}>
        <TextEditor text={text} setText={setText} />
      </div>

      <p>Results</p>
      <div style={{border: '1px solid red', marginBottom: '1rem', paddingLeft: "0.5rem"}} className='ck-content' dangerouslySetInnerHTML={{ __html: text}}/>

      <div style={{border: '1px solid red', marginBottom: '1rem', paddingLeft: "0.5rem"}} className='ck-content'> { ReactHtmlParser (text) } </div>

      <div style={{border: '1px solid red', marginBottom: '1rem', paddingLeft: "0.5rem"}} className='ck-content'> { parse(text) } </div>

      <Markup content={text} />

      <div style={{border: '1px solid red', marginBottom: '10rem', paddingLeft: "0.5rem"}} className='ck-content'> { math() } </div>

    </div>
  );
}