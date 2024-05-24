import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import Layout from "./components/Layout/Layout";
import MyArticlesPage from "./pages/MyArticlesPage";
import UpdateArticlePage from "./pages/UpdateArticlePage";
import ShowArticlePage from "./pages/ShowArticlePage";
import AuthProvider from "./context/auth/AuthProvider";
import RequireAuth from "./components/Auth/Requireauth";

export default function App(): JSX.Element {
  return (
    <AuthProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            {/* public routes */}
            <Route element={<RequireAuth onlyPublic />}>
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignupPage />} />
            </Route>
            {/* private routes */}
            <Route element={<RequireAuth onlyPublic={false} />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/create" element={<CreateArticlePage />} />
                <Route path="/edit" element={<UpdateArticlePage />} />
                <Route path="/my-articles" element={<MyArticlesPage />} />
                <Route path="/article/:id" element={<ShowArticlePage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider>
  );
}
