import React from "react";

const myElement1 = <h1>I Love JSX!</h1>;

const myElement2 = React.createElement('h1', {}, 'I do not use JSX!');

const myElement3 = <h1>React is {5 + 5} times better with JSX</h1>;

const myElement4 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const myElement5 = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

const myElement6 = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);

const myElement7 = <input type="text" />;

const myElement8 = <h1 className="myclass">Hello World</h1>;

const x = 5;

let text = "Goodbye";

if (x < 10) {
  text = "Hello";
}

const myElement9 = <h1>{text}</h1>;

const myElement10 = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

export const myElement = (
  <>
    {myElement1}
    {myElement2}
    {myElement3}
    {myElement4}
    {myElement5}
    {myElement6}
    {myElement7}
    {myElement8}
    {myElement9}
    {myElement10}
  </>
);
