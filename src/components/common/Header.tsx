import './Header.css'


const Header = () => {

    return (
        <header>
            <p>Kanban Project Management Tool</p>
            <div className='info'>
                <img src="src/assets/images/help_icon.png" alt="help-icon" />
                <div className="profile">
                    <span>
                        ML
                    </span>
                </div>
            </div>
        </header>
    );
}

export default Header