import React from 'react'
import HomePage from './Pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './Pages/JobsPage';
import NotFoundPage from './Pages/NotFoundPage';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';
import CSSNAV from './components/CSSNAV';
import JobPage,{jobLoader} from './Pages/JobPage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom';
import { data } from 'autoprefixer';



// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<MainLayout/>} >
//           <Route index element={<HomePage/>} />
//           <Route path='/jobs' element={<JobsPage/>}/>
//           <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
//           <Route path='*' element={<NotFoundPage/>}/>
//         </Route>
//       </Routes>
//     </Router>
//     )
// };
const App = () => {

  // add newJob
  const addJob=async (newJob)=>{
    const res=await fetch('/api/jobs',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  // Delete Job
  const deleteJob=async (id)=>{
    const res=await fetch(`/api/jobs/${id}`,{
      method:'DELETE'
    });
    return;
  }
  // Update Job
  const updateJob=async (job)=>{
    const res=await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(job)
    });
    return;
  }
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>} >
        <Route index element={<HomePage/>} />
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage  addJobSubmit={addJob}/>} />
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router} />
};

export default App;
