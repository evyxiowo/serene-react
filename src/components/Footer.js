import { pageLinks, socialLinks } from '../data';
function Footer() {
  return (
    <div><footer className="section footer">
    <ul className="footer-links">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.url} className="footer-link">
              {link.title}
            </a>
          </li>
        );
      })}
    </ul>
    <ul className="footer-icons">
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} target="_blank" className="footer-icon">
              <i className={`fab ${link.iconClass}`}></i>
            </a>
          </li>
        );
      })}
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer></div>
  )
}
export default Footer