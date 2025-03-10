import { useState } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import LoginForm from './LoginForm';
import RegistrationForm from './Registrationform';
import AddConcertForm from './AddConcertForm';
import ConcertsList from './ConcertsList';

const Main = () => {
    let [page, setPage] = useState('home');
    let currentPage;

    if (page === 'home')
        currentPage = <ConcertsList />
    else if (page === 'login')
        currentPage = <LoginForm navigate={setPage} />
    else if (page === 'register')
        currentPage = <RegistrationForm />
    else if (page === 'add-concert')
        currentPage = <AddConcertForm />

    return (
        <div>
            <NavBar navigate={setPage} />
            {currentPage}
        </div>
    );
}
export default Main;