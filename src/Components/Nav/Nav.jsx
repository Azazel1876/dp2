import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className ='nav'>
            <div>
                <a>Цех 1</a>
            </div>
            <div>
                <a>Цех 2</a>
            </div>
            <div>
                <a>Цех 3</a>
            </div>
        </div>
    );
}

export default Nav;