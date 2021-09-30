import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CredentialsPage from './components/screens/CredentialsPage';
import Navbar from './components/screens/Navbars/Navbar';
import TimelinePage from './components/screens/TimelinePage';
import ProfilePage from './components/screens/ProfilePage';
import CreatePostPage from './components/screens/CreatePostPage';

import { routerPaths } from './utils/enums';

import useLoadMyProfileInfo from './hooks/useLoadMyProfileInfo';

const App = () => {
  const userData = useSelector((state) => state.user)
  const themeColors = useSelector((state) => state.theme);

  const scrollbarStyle = `<style type='text/css'> ::-webkit-scrollbar-thumb { background: ${themeColors.Scrollbar}; border-radius: 10px; } ::-webkit-scrollbar-thumb:hover { background: ${themeColors.ScrollbarHover}; } </style>`
  document.head.insertAdjacentHTML("beforeend", scrollbarStyle)
  document.body.style.background = themeColors.Background;

  useLoadMyProfileInfo();

  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/"> <Redirect to={routerPaths.TIMELINE}/> </Route>

        <Route path={routerPaths.AUTH}> <CredentialsPage /> </Route>

        <Route path={routerPaths.TIMELINE}> <Navbar><TimelinePage   /></Navbar> </Route>
        <Route path={routerPaths.PROFILE}>  <Navbar><ProfilePage    /></Navbar> </Route>
        <Route path={routerPaths.CREATE}>   <Navbar><CreatePostPage /></Navbar> </Route>

        <Route path="*"> <Redirect to={routerPaths.TIMELINE} /> </Route>
        <Route path="*"> <Redirect to={routerPaths.AUTH}     /> </Route> */}

        {userData.isAuthenticated  && <Route exact path="/"> <Redirect to={routerPaths.TIMELINE}/> </Route>}

        {!userData.isAuthenticated && <Route path={routerPaths.AUTH}> <CredentialsPage /> </Route>}

        {userData.isAuthenticated  && <Route path={routerPaths.TIMELINE}> <Navbar><TimelinePage   /></Navbar> </Route>}
        {userData.isAuthenticated  && <Route path={routerPaths.PROFILE}>  <Navbar><ProfilePage    /></Navbar> </Route>}
        {userData.isAuthenticated  && <Route path={routerPaths.CREATE}>   <Navbar><CreatePostPage /></Navbar> </Route>}
        
        {userData.isAuthenticated  && <Route path="*"> <Redirect to={routerPaths.TIMELINE} /> </Route>}
        {!userData.isAuthenticated && <Route path="*"> <Redirect to={routerPaths.AUTH}     /> </Route>}
      </Switch>
    </BrowserRouter>
  )
}     

export default App

