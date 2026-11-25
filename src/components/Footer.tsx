export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#" className="logo">
            shop<span>mini</span>
            <span className="logo-dot">.</span>
          </a>
          <p>Chút niềm vui cho mỗi ngày của bạn.</p>
        </div>
        <div className="footer-contact">
          <span>Luôn sẵn lòng hỗ trợ bạn</span>
          <a href="mailto:hotro@shopmini.vn">hotro@shopmini.vn</a>
          <a href="tel:19000000">1900 0000</a>
        </div>
        <div className="footer-bottom">
          <span>© {year} ShopMini · Bài tập môn Công nghệ lập trình hiện đại</span>
          <span>Made with ♡ in Vietnam</span>
        </div>
      </div>
    </footer>
  )
}
