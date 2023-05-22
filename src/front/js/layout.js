import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { RegisterUser } from "./pages/registerUser";
import { RegisterProvider } from "./pages/registerProvider";
import { PrivateUser } from "./pages/privateUser";
import { PrivateProvider } from "./pages/privateProvider";
import { SignInUser } from "./pages/signInUser";
import { SignInProvider } from "./pages/signInProvider";

import injectContext from "./store/appContext";



//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<RegisterUser />} path="/registerUser" />
                        <Route element={<RegisterProvider />} path="/registerProvider" />
                        <Route element={<PrivateUser />} path="/privateUser" />
                        <Route element={<PrivateProvider />} path="/privateProvider" />
                        <Route element={<SignInUser />} path="/signInUser" />
                        <Route element={<SignInProvider />} path="/signInProvider" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
