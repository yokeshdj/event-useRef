import React from 'react';
import './style.css';
import Forms from './Forms';
export default function App() {
  // const ref = React.useRef(null);
  // const inputRef = React.useRef(null);
  // const moveToTop = () => {
  //   if (ref.current) {
  //     ref.current.scrollTop = 50;
  //   }
  //   console.log(ref.current);
  // };
  // const focusOnInput = () => {
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  //   console.log(inputRef.current);
  // };
  return (
    <div>
      <Forms />
      {/* <button onClick={moveToTop}>Move to Top</button>
      <button onClick={focusOnInput}>Focus</button>
      <input ref={inputRef}></input>
      <div
        ref={ref}
        style={{
          width: '10',
          border: '1px solid black',
          height: '200px',
          overflow: 'auto',
          width: '200px',
          padding: '20px',
        }}
      >
        <div
          style={{
            width: '10',
            border: '1px solid black',
            height: '500px',
            width: '100px',
          }}
        ></div>
      </div> */}
    </div>
  );
}
