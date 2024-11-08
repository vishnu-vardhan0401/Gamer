import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './Context/GlobalState';
import Tasks from './components/Tasks';
import AuthPage from './components/AuthPage';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import AdminDash from './components/AdminDash';
import Addtask from './components/Addtask';
import AdminPrtected from './components/AdminPrtected';

function App() {
  const { isAuthenticated, adminAuth, loading ,role} = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={isAuthenticated && !adminAuth ? <Dashboard /> : <AuthPage />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/admin-dash" element={adminAuth ? <AdminDash /> : <Navigate to="/" />} />
      <Route path="/addtask" element={<AdminPrtected><Tasks /> </AdminPrtected> } />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
