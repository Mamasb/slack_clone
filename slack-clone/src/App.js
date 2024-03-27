import react from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
  // BEM naming convention
    <div className="App">
      <h1>Jambo! This is a slack-clone  done by Philiip K. Mwangi </h1>
	  
	  {/* Header */}
	  <Header />
	  <div className="app_body">
	   <Sidebar />
	  {/* Sidebar */}
	  {/* React-Router -> chat scren */}
	  </div>
    </div>
  );
}

export default App;
