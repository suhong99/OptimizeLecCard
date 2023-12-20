import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ScrollToTop from '@shared/ScrollToTop'
import HomePage from '@pages/Home'
import TestPage from '@pages/Test'
import CardPage from '@pages/Card'
import SigninPage from '@pages/Signin'
import SignupPage from '@pages/Signup'

import PrivateRoute from '@components/auth/PrivateRoute'
import Navbar from '@shared/Navbar'
import ApplyPage from '@pages/Apply'
import { Suspense } from 'react'
function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/card/:id" Component={CardPage} />
          <Route path="/test" Component={TestPage} />
          <Route path="/signin" Component={SigninPage} />
          <Route path="/signup" Component={SignupPage} />
          <Route
            path="/apply/:id"
            element={
              <PrivateRoute>
                <Suspense fallback={<></>}>
                  <ApplyPage />
                </Suspense>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
