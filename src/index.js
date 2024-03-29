import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
// import nodeContentRenderer from './components/TreeTask/node-content-renderer';
// module.exports = {
//   nodeContentRenderer,
// };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DndProvider backend={HTML5Backend}>
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <BrowserRouter>
        {/* <App /> */}
        <Routes>
          <Route path='/' element={ <App /> }>
            <Route index element={ <HomePage /> } />
            <Route path='users' element={ <User /> } />
            <Route path='admin' element={ <Admin /> } />
          </Route>
        </Routes>
      </BrowserRouter>
      
    {/* </React.StrictMode> */}
  </Provider>
  </DndProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
