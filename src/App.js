import './App.css';
import Navbar from './Navbar';
import Filternav from './Filternav'
import Giggrid from './GIggrid'
function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className='app-text'>
    <h2 >Organization Gigs</h2>
    <p>Manage your organization gigs here</p>
    </div>
    <Filternav></Filternav>
    <div className='gigscollection'>
      
<Giggrid></Giggrid>
<Giggrid></Giggrid>
<Giggrid></Giggrid>
    </div>
    </>
  );
}

export default App;
