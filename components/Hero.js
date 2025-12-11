"use client"; // only if you're using App Router

export default function Hero() {
  return (
    <section className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
      >
        <source src="public/Videos/video-66.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
  <h1 className="hero-animate">Highway-Connected Commercial Space</h1>
  <h2 className="warehouse-highlight">
    Custom‑Built Warehousing Solutions Ready on Demand
  </h2>
  <h2 className="lease-highlight">AVAILABLE FOR LEASE</h2>
  <p className="fade-up">
    Strategic property with unmatched connectivity and logistics advantages.
  </p>
</div>

    </section>
  );
}
