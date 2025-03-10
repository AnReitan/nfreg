import { useNavigate } from "react-router-dom";

export default function Main(){
    const navigate = useNavigate ();
    return (
        <div className="container">
            <h2>Hovedmeny</h2>
            <button className= "btn btn-menu-green">Registrer aksjon</button><br></br>
            <button className= "btn btn-menu-green">Tidligere aksjoner</button><br></br>
            <button className= "btn btn-menu-green">Mine Innstillinger</button><br></br>
            <button className= "btn btn-menu-blue">Logg ut</button>
            
            <h3>Admin</h3>
            <button className= "btn btn-menu-blue" onClick={() => navigate('/user/view')}>Se brukere</button>
            <button className= "btn btn-menu-blue">Legg til bruker</button>
            <br></br>
            <button className= "btn btn-menu-blue">Se aksjoner</button>
            <button className= "btn btn-menu-blue">Legg til aksjon</button>
            <br></br>

        </div>
     )
}