import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="/summary" className={({ isActive }) => (isActive ? 'active' : '')}>Summary</NavLink>
          </li>
          <li>
            <NavLink to="/add-task" className={({ isActive }) => (isActive ? 'active' : '')}>Add Task</NavLink>
          </li>
          <li>
            <NavLink to="/board" className={({ isActive }) => (isActive ? 'active' : '')}>Board</NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>Contacts</NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        <NavLink to="/legal-notice">Legal Notice</NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;