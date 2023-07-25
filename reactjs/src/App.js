import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './component/Login'
import Register from './component/Register'
import Dashboard from './component/Dashboard'
import Navbar from './component/Navbar'
import Content from './component/Content'
import Dash from './component/Dash'
import BodyContent from './component/BodyContent'
import Footer from './component/Footer'
import Jobs from './pages/jobs/Jobs'
import SlideShow from './component/slideShow'
import Reports from './pages/reports/Report'
import ReportsTab from './pages/reports/ReportTab'
import Pagination from './component/Pagination'
import ReportPrev from './component/ReportPrev'
import About from './pages/about/About'
import AdminDashboard from './pages/admin/adminDashboard'
import Services from './pages/services/Services'
import BookingForm from './pages/services/BookingForm'
import BookingPrev from './pages/services/BookingPrev'
import ServPagination from './pages/services/ServPagination'
import BookingsTab from './pages/services/BookingsTab'
import EditReport from './pages/reports/EditReport'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Navbar /><br /><br /><br />
          <SlideShow />
          <Dash /><br />
          <Content /><br />
          <Dashboard /><br /><br /><br />
          <BodyContent /><br />
          <Footer />
        </Route>
        <Route path="/about">
          <Navbar /><br /><br /><br /><br />
          <About /><br /><br /><br /><br />
          <Footer />
        </Route>
        <Route path="/jobs">
          <Navbar /><br /><br /><br /><br /><br />
          <Jobs /><br /><br /><br /><br />
          <Footer />
        </Route>
        <Route path="/report">
          <Navbar /><br /><br /><br /><br /><br />
          <Reports /><br /><br /><br />
          <Pagination /><br />
          <Footer />
        </Route>
        <Route path="/reportstab">
          <Navbar /><br /><br /><br /><br /><br /><br />
          <ReportsTab /><br />
          <ReportPrev /><br />
        </Route>
        <Route path="/editreports/:id">
          <Navbar /><br /><br /><br /><br /><br /><br />
          <EditReport /><br />
        </Route>
        <Route path="/admin">
          <AdminDashboard />
        </Route>
        <Route path="/services">
          <Navbar /><br /><br /><br /><br /><br /><br />
          <Services /><br /><br />
          <Footer />
        </Route>
        <Route path="/bookingform">
          <Navbar /><br /><br /><br /><br />
          <BookingForm /><br />
          <ServPagination /><br />
        </Route>
        <Route path="/bookingstab">
          <Navbar /><br /><br /><br /><br />
          <BookingsTab /><br />
          <BookingPrev /><br />
        </Route>
      </Switch>

    </BrowserRouter>
  )
}

export default App