import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/chat'
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
