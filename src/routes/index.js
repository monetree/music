import React from 'react';

const Home = React.lazy(() => import('views/home/home.view'));
const SignUp = React.lazy(() => import('views/signup/signup.view'));
const SignIn = React.lazy(() => import('views/signin/signin.view'));
const Album = React.lazy(() => import('views/album/album.view'));
const Profile = React.lazy(() => import('views/profile/profile.view'));

var indexRoutes = [
    { path: "/profile", name: "Profile", component: Profile },
    { path: "/album", name: "Album", component: Album },
    { path: "/register", name: "SignUp", component: SignUp },
    { path: "/login", name: "SignIn", component: SignIn },
    { path: "/", name: "Home", component: Home },
];

export default indexRoutes;
