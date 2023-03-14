import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Homepage from './components/pages/Homepage/Homepage';
import TeacherLogin from './components/pages/login/TeacherLogin';
import StudentLogin from './components/pages/login/StudentLogin';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/teacherLogin' element={<TeacherLogin />}/>
          <Route path='/studentLogin' element={<StudentLogin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
