import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Home from './Components/Home';
import Userlisting from './Components/UserList';
import Adduser from './Components/AddUser';
import Updateuser from './Components/UpdateUser';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
        <div className='header text-center mb-4'>
          <h2>Crud Opperation with react-redux</h2>
        </div>
        <Routes>
          <Route path='/' element={<Userlisting></Userlisting>}></Route>
          <Route path='/user/add' element={<Adduser></Adduser>}></Route>
          <Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer className="toast-position"
        position="top-right"></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;