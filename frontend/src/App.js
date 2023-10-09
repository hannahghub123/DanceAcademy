import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import OptionSignup from './components/signup/OptionSignup';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import StdSignup from './components/stdSignup/StdSignup';
import TutorSignup from './components/tutorSignup/TutorSignup';
import StdLogin from './components/stdLogin/StdLogin';
import TutorLogin from './components/tutorLogin/TutorLogin';
import StudentDashboard from './components/dashboard/StudentDashboard';
import OptLogin from './components/login/OptLogin';
import AdminLogin from './components/admin/login/AdminLogin';
import AdminDashboard from './components/admin/dashboard/AdminDashboard';
import StudentComponent from './components/admin/dashboard/StudentComponent';
import TutorsComponent from './components/admin/dashboard/TutorsComponent';
import TutorProfile from './components/tutorprofile/TutorProfile';
import CourseCategory from './components/admin/dashboard/course/CourseCategory';
import Course from './components/admin/dashboard/course/Course';
import CourseStruct from './components/admin/dashboard/course/CourseStruct';
import Header from './components/common/header/Header';
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

function App() {
  // const [access, setAccess] = useState(localStorage.getItem("accessToken")?localStorage.jwt_decode("accessToken"):"");
 
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/courses" element={<CourseHome/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/pricing" element={<Price/>} />
      <Route path="/journal" element={<Blog/>} />
      <Route path="/contact" element={<Contact/>} />
      {/* <Route path="std-signup/" element={<StdSignup/>} />
      <Route path="tutor-signup/" element={<TutorSignup/>} />
      <Route path="opt-signup/" element={<OptionSignup/>} />
      <Route path="opt-login/" element={<OptLogin/>} />
      <Route path="std-login/" element={<StdLogin/>} />
      <Route path="tutor-login/" element={<TutorLogin/>} />
      <Route path="tutor-dashboard/:id" element={<Dashboard/>} />
      <Route path="std-dashboard/" element={<StudentDashboard/>} />
      <Route path="adminlogin/" element={<AdminLogin/>} />
      <Route path="admin-dashboard/" element={<AdminDashboard/>} />
      <Route path="student/" element={<StudentComponent/>} />
      <Route path="tutor/" element={<TutorsComponent/>} />
      <Route path="tutor-profile/:id" element={<TutorProfile/>} />
      <Route path="course-category/" element={<CourseCategory/>} />
      <Route path="course/:id" element={<Course/>} />
      <Route path="course-struct/:id" element={<CourseStruct/>} />
       */}
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
   

    </>
  );
}

export default App;
