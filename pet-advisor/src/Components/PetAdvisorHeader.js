import './PetAdvisorHeader.css';
import logo from './../logo.svg';

function PetAdvisorHeader(){
     return(
        <div className="petAdvisorHeaderContainer">
             

             <div className='logoContainer' >
            <img src={logo} className='logo' alt="petAdvisorLogo" />
             <h1 className='logoText'>Pet Advisor</h1>
             </div>
        </div>
     );

}

export default PetAdvisorHeader;
