import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home.jsx';
import ChooseUser from '../src/components/ChooseUser';
import AdminSignIn from '../src/components/AdminSignin';
import StudentSignIn from '../src/components/StudentSignin';
import TeacherSignIn from '../src/components/TeacherSignin';
import AdminDashboard from '../src/pages/Admin/Dashboard.jsx';


import Classes from '../src/pages/Admin/Classes';

import Exam from '../src/pages/Admin/Exam';

import Attendance from '../src/pages/Admin/Attendance';
import Performance from '../src/pages/Admin/Performance';
import Teachers from '../src/pages/Admin/Teachers';
import Students from '../src/pages/Admin/Students';

import Assignment from './pages/Admin/Assignment.jsx';
import Library from '../src/pages/Admin/Library';
import EventCalender from '../src/pages/Admin/EventCalender';
import SettingsProfile from '../src/pages/Admin/SettingsProfile';
import Announcement from '../src/pages/Admin/Announcement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/choose-user' element ={<ChooseUser/>} />

        <Route exact path='/choose-user/admin-signIn' element ={<AdminSignIn/>} />
        <Route exact path='/choose-user/student-signIn' element ={<StudentSignIn/>} />
        <Route exact path='/choose-user/teacher-signIn' element ={<TeacherSignIn/>} />

        <Route exact path='/admin/dashboard' element ={<AdminDashboard/>} />

        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/performance" element={<Performance />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />
        <Route exact path="/admin/students" element={<Students />} />
        <Route exact path="/admin/assignments" element={<Assignment />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/events" element={<EventCalender />} />
        <Route exact path="/admin/settings" element={<SettingsProfile />} />

        </Routes>
    </Router>
  )
}

export default App
