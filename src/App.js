import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { Fragment } from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const isAuth=useSelector(state=>state.auth.isAuthentication);
  return (
   <Fragment>
    <Header/>
   { !isAuth && <Auth/>}
   {isAuth && <UserProfile/>}
    <Counter/>
   </Fragment>
   
  );
}

export default App;
