import { Link } from 'react-router-dom';

const Header = (props) => {
    let style = {
        backgroundColor: 'chartreuse',
        borderBottom: '3px solid black',
        margin: 0,
        padding: '1em 0'
    }
    return (
        <header style={style}>
            <h1>
                It's a website
                </h1>
            <nav>
                {/* TODO: Conditional link rendering */}
                <Link to='/'>Home</Link>{' | '}
                <Link to='/auth'>Login/Signup</Link>{' | '}
                <Link to='/profile'>Account</Link>
            </nav>
        </header>
    );
}

export default Header;