import "../css/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text-muted">
          <a href="/home">Home</a> | <a href="/">About</a> | <a href="/contact">Contact</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;