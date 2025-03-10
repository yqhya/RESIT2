import './NavBar.css'
const NavBar=({navigate})=>{
    return(
        <nav>
            <div className="logo" onClick={()=>{
                       navigate('home')
                    }}>
                Concert Tickets
            </div>
            <div>
                <ul>
                    <li onClick={()=>{
                       navigate('login')
                    }}>login</li>
                    <li onClick={()=>{
                       navigate('register')
                    }}>register</li>
                </ul>
            </div>
        </nav>
    );

}
export default NavBar