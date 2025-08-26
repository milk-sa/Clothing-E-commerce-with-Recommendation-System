import Footer from './components/Footer';
import Header from './components/Header';
import Herosection from './components/Herosection';
import Product from './components/Productsection';
import Productsection from './components/Productsection';
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signuppage';
import Login from './pages/Loginpage';
import UserDashboard from './pages/Userdashboard';
import Productdetailpage from './pages/Productdetailpage';
import Authheader from './components/Authheader';
import SimilarProducts from './components/Similarproducts';


export default function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
   const handleNavigate = (page) => {
    if (page === "home") {
      setIsAuthenticated(false); // logout
      setUserName("");
    }
    setCurrentPage(page);
  };


   const [currentpage,setCurrentPage] = useState("home")
  const renderPage = () =>{
    switch(currentpage){
      case"home":
      return(
        <>
        
        
        <Herosection onNavigate={setCurrentPage} />
        <Productsection title="find something to buy" />
        <Productsection title="find something to buy" />
        </>
      );
      case"Register":
      return(
       <Signup onRegisterSuccess={() => setCurrentPage("dashboard")} />
      );
      case"login":
      return(
        <Login onLoginSuccess={() => setCurrentPage("dashboard")} />
      );
      case"dashboard":
        return( <UserDashboard  onNavigate={setCurrentPage} />
        );
        case "product":
  return <Productdetailpage  onNavigate={handleNavigate} />;    
      default:
        return(
           <>
        <Herosection />
        <Productsection title="find something to buy" />
        <Productsection title="find something to buy" />
        </>

        );

    }
    
  }
  return (
    
    <div className="App">
      <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <Header onNavigate={setCurrentPage} /> {/* Pass setCurrentPage to Header */}
      

      
      {renderPage()}
      <Footer />
    </div>
    
      
    </div>

  );
}  


  
  

  {/*return (
    
      <div className="App">
        <Header />
        <Herosection />
        <Productsection title="find something to buy" />
        <Productsection title="find something to buy" />
      
      <Footer />
    </div>
    
  );
  */}


