/* the side bar menu part */

/* import { Link , useLocation} from 'react-router-dom'; */

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">Reviewary</div>
      <nav className="sidebar-nav">
        <ul>
            <li className="home">Home</li>
            <li className="create">Create Review</li>
            <li className="tags">Tags</li>
            <li className="folders">Folders</li>
            <li className="account">Account</li>
            <li className="logout">Logout</li>
        </ul>
      </nav>
    </aside>
  );
}
