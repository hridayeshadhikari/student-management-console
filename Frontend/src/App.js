import './App.css';
import Home from './Home';
import Navbar from './component/common/Navbar';
import AddStudent from './component/student/AddStudent';
import EditStudent from './component/student/EditStudent';
import Student from './component/student/Student';
import Studentview from './component/student/Studentview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact
            path='/'
            element={<Home />}
          ></Route>
          
          <Route exact path='/view-all-students'
            element={<Student />}>
          </Route>

          <Route
            exact
            path='/student-view/:id'
            element={<Studentview />}>
          </Route>

          <Route exact path='/add-student'
            element={<AddStudent />}>
          </Route>

          <Route exact path='/edit-student/:id'
            element={<EditStudent />}>
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
