/* the side bar menu part */

/* import { Link , useLocation} from 'react-router-dom'; */

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">Reviewary</div>
      <nav className="sidebar-nav">
        <ul>
            <li className="home">Home</li>
            <li className="Create">Create Review</li>
            <li className="Tags">Tags</li>
            <li className="Folders">Folders</li>
            <li className="Account">Account</li>
            <li className="Logout">Logout</li>
        </ul>
      </nav>
    </aside>
  );
}
