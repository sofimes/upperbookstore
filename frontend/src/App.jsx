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
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Books" element={<Books />} />
          </Route>
          <Route path="/Admin-dashboard" element={<AdminDashboard />}>
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            <Route path="book-management" element={<BookManagement />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="add-book" element={<AddBook />} />
          </Route>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
