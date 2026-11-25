export default function Banner() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          MUA SẮM VUI MỖI NGÀY
        </p>
        <h1 id="hero-title">
          Món bạn thích,
          <br />
          <span>giá bạn mê.</span>
        </h1>
        <p className="hero-description">
          Khám phá những món đồ xinh xắn, thiết thực cho cuộc sống mỗi ngày.
          Chọn nhanh, mua vui!
        </p>
        <a className="hero-button" href="#products">
          Khám phá ngay <span aria-hidden="true">↗</span>
        </a>
        <p className="hero-note">
          <span aria-hidden="true">✦</span> Chọn lọc kỹ càng · Giá cả dễ thương
        </p>
      </div>
      <div className="hero-art" aria-label="Ưu đãi đặc biệt từ ShopMini" role="img">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-sparkle sparkle-one">✳</div>
        <div className="hero-sparkle sparkle-two">✦</div>
        <div className="hero-sticker">
          <span>DEAL</span>
          <strong>ngon!</strong>
        </div>
        <div className="hero-bag">
          <div className="bag-handle" />
          <span className="bag-mark">s<span>m</span>.</span>
          <span className="bag-caption">little things, big joy</span>
        </div>
        <div className="hero-card hero-card-top">✷ &nbsp; Đồ xinh mỗi ngày</div>
        <div className="hero-card hero-card-bottom">
          <span className="hero-card-icon">%</span>
          <span>
            <strong>Ưu đãi tuần này</strong>
            <small>Mua sắm thật vui</small>
          </span>
        </div>
      </div>
    </section>
  )
}
