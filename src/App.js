
import './App.css';
import React ,{lazy , Suspense} from 'react';


const Main = lazy(() => import('./sections/Main/Main'));
const Body = lazy(() => import('./sections/Body/Body'));
const Last = lazy(() => import('./sections/Last/Last'));
const Posts = lazy(() => import('./sections/Posts/Posts'));
const Skill = lazy(() => import('./sections/Skill/Skill'));
const Works = lazy(() => import('./sections/Works/Works'));


function App() {
  return (
    <div className="App">
   
  
     
    
   
    
     
        <Suspense fallback={<div>Loading...</div>}>
        <Main />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
        <Works/>
        </Suspense>
          
        <Suspense fallback={<div>Loading...</div>}>
        <Skill />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
        <Body/>
        </Suspense>
     
     
      
    
      
        <Suspense fallback={<div>Loading...</div>}>
        <Posts />
        </Suspense>
      
        <Suspense fallback={<div>Loading...</div>}>
        <Last/>
        </Suspense>
      
    </div>
  );
}

export default App;
