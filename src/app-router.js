import React from "react";
import { LoginPage } from "./pages/login-page";
import { TodoPage } from "./pages/todo-page";
import { NotFoundPage } from "./pages/not-found-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/register-page";
import { PrivateRoute } from "./compound/private-route";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      
        <Route path="/todos" element={
          <PrivateRoute>
            <TodoPage />
          </PrivateRoute>
        } />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
