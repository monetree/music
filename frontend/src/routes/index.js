import React from 'react';

const Home = React.lazy(() => import('views/home/home.view'));
const SignUp = React.lazy(() => import('views/signup/signup.view'));
const SignIn = React.lazy(() => import('views/signin/signin.view'));
const Album = React.lazy(() => import('views/album/album.view'));
const Profile = React.lazy(() => import('views/profile/profile.view'));
const MusicUpload = React.lazy(() => import('views/upload/music-upload.view'));
const ArtistUpload = React.lazy(() => import('views/upload/artist-upload.view'));
const PlaylistUpload = React.lazy(() => import('views/upload/playlist-upload.view'));
const Songs = React.lazy(() => import('views/songs/songs.view'));


var indexRoutes = [
    { path: "/songs", name: "Songs", component: Songs },
    { path: "/playlist-upload", name: "PlaylistUpload", component: PlaylistUpload },
    { path: "/artist-upload", name: "ArtistUpload", component: ArtistUpload },
    { path: "/music-upload", name: "MusicUpload", component: MusicUpload },
    { path: "/profile", name: "Profile", component: Profile },
    { path: "/album", name: "Album", component: Album },
    { path: "/register", name: "SignUp", component: SignUp },
    { path: "/login", name: "SignIn", component: SignIn },
    { path: "/", name: "Home", component: Home },
];

export default indexRoutes;
