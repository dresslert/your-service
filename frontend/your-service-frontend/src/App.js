import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import RegisterLawyer from './pages/auth/RegisterLawyer';
import RegisterClient from './pages/auth/RegisterClient';
import ResetPassword from './pages/auth/ResetPassword';
import LawyerProfile from './pages/profile/Lawyer/LawyerProfile';
import ClientProfile from './pages/profile/Client/ClientProfile';
import LawyerSearchPage from './pages/search/LawyerSearchPage';
import LawyerDetails from './pages/search/LawyerDetails';
import AppointmentForm from './pages/appointments/AppointmentForm';
import AppointmentConfirmation from './pages/appointments/AppointmentConfirmation';
import AppointmentHistory from './pages/appointments/AppointmentHistory';
import Payment from './pages/payments/Payment';
import PaymentConfirmation from './pages/payments/PaymentConfirmation';
import Messages from './pages/messages/Messages';
import ReviewLawyer from './pages/reviews/ReviewLawyer';
import ContactSupport from './pages/support/ContactSupport';
import FAQ from './pages/support/FAQ';
import TermsAndConditions from './pages/legal/TermsAndConditions';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import AdminPanel from './pages/admin/AdminPanel';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register-lawyer" element={<RegisterLawyer />} />
          <Route path="register-client" element={<RegisterClient />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="lawyer-profile" element={<LawyerProfile />} />
          <Route path="client-profile" element={<ClientProfile />} />
          <Route path="search" element={<LawyerSearchPage />} />
          <Route path="lawyer-profile/:id" element={<LawyerDetails />} />
          <Route path="appointment" element={<AppointmentForm />} />
          <Route path="appointment-confirmation" element={<AppointmentConfirmation />} />
          <Route path="appointment-history" element={<AppointmentHistory />} />
          <Route path="payment" element={<Payment />} />
          <Route path="payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="messages" element={<Messages />} />
          <Route path="review-lawyer" element={<ReviewLawyer />} />
          <Route path="contact-support" element={<ContactSupport />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
