import React from 'react'
import { Route, 
  createBrowserRouter,
  createRoutesFromElements, 
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import RegisterAndLogout from './components/RegisterAndLogout';
import Logout from './components/Logout';
import HomePage from './pages/HomePage';
import PizzasPage from './pages/PizzasPage'
import CustomerPage from './pages/CustomerPage';
import RolePage from './pages/RolePage';
import OwnerForm from './components/OwnerForm';
import PizzaCategoryPage from './pages/PizzaCategoryPage';
import CustomerInformationPage from './pages/CustomerInformationPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import OwnerPage from './pages/OwnerPage';
import PizzaTypesPage from './pages/PizzaTypesPage';
import CategoryForm from './components/CategoryForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='/pizzas' element={<PizzasPage />} />
        <Route path='/pizzaCategory' element={<ProtectedRoute><PizzaCategoryPage /></ProtectedRoute>} />
        <Route path='/customer' element={<ProtectedRoute><CustomerPage /></ProtectedRoute>} />
        <Route path='/customerform' element={<CustomerInformationPage />} />
        <Route path='/owner' element={<ProtectedRoute><OwnerPage /></ProtectedRoute>} />
        <Route path='/ownerform' element={<ProtectedRoute><OwnerForm /></ProtectedRoute>} />
        <Route path='/add-pizza' element={<ProtectedRoute><PizzasPage /></ProtectedRoute>} />
        <Route path='/role' element={<RolePage/>} />
        <Route path='/category' element={<ProtectedRoute><PizzaCategoryPage /></ProtectedRoute>} />
        <Route path='/category/add' element={<ProtectedRoute><CategoryForm /></ProtectedRoute>} />
        <Route path='/pizzaTypes' element={<ProtectedRoute><PizzaTypesPage /></ProtectedRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/logout" element={<Logout />} />
        <Route path='*' element={<NotFoundPage />} />
    </Route> 
  )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App