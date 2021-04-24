// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

if (window) {
  (async () => {
    const React = await import('react');
    const ReactDOM = await import('react-dom');
    const { App } = await import('./App')
    var script: any = document.currentScript;
    var fullUrl = script.src;
    const worker = new Worker(fullUrl);
    console.log('in')
    worker.postMessage({ hi: 'hi' })
    console.log(fullUrl)
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })()
}
else {

}

onmessage = (e) => {
  console.log(e.data)
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
