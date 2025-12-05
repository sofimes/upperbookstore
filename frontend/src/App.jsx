import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import BookManagement from "./components/admin/BookManagement";
import UserManagement from "./components/admin/UserManagement";
import AddBook from "./components/admin/AddBook";
import BookCategory from "./components/admin/BookCategory";
import { ProtectedRoute, AdminRoute } from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/Books" element={<Books />} />
            </Route>
          </Route>

          {/* admin route */}
          <Route element={<AdminRoute />}>
            <Route path="/Admin-dashboard" element={<AdminDashboard />}>
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
              <Route path="" element={<BookManagement />} />
              <Route path="user-management" element={<UserManagement />} />
              <Route path="add-book" element={<AddBook />} />
              <Route path="book-category" element={<BookCategory />} />
            </Route>
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
