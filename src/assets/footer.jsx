import "../css/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;