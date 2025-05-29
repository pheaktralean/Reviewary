/* for the footer component of the website */

function Footer() {
    return (
        <footer className="footer">
            &copy; {new Date().getFullYear()} Reviewary. All rights reserved.
        </footer>
    );
}

export default Footer;