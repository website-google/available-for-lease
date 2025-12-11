export default function MapSection() {
  const destinations = [
    { name: "City Center", time: "15 minutes" },
    { name: "Airport", time: "20 minutes" },
    { name: "Agra Expressway", time: "10 minutes" },
    { name: "Hardoi Highway", time: "5 minutes" },
    { name: "Dubagga", time: "12 minutes" },
    { name: "Kanpur Highway", time: "2 minutes" },
    { name: "Raibareily Highway", time: "25 minutes" },
    { name: "Sultanpur Highway", time: "30 minutes" },
    { name: "Purvanchal Expressway", time: "15 minutes" },
    { name: "Faizabad Highway", time: "20 minutes" },
    { name: "Metro Station", time: "20 minutes" },
    { name: "Bus Stand", time: "15 minutes" },
    { name: "Railway Station", time: "25 minutes" }
  ];

  return (
    <section className="map" id="connectivity">
      <div className="section-intro">
        <h2>Strategic Highway Connectivity</h2>
        <p>
          The property boasts remarkable accessibility, ensuring seamless travel to key destinations.
          This enhances operational efficiency for all vehicle sizes, including large trucks.
        </p>
      </div>

      <div className="connectivity-grid">
        <div className="connectivity-list">
          <h3>Connectivity</h3>
          <ul>
            {destinations.map((d, i) => (
              <li key={i}>
                <strong>{d.name}</strong> — {d.time}
              </li>
            ))}
          </ul>
          <div className="callout">
            <strong>Key advantages:</strong> 2-minute drive to Kanpur Highway; 20-minute access to Airport and Metro Station.
          </div>
        </div>

        <div className="map-placeholder">
          <h3>Connectivity overview map</h3>
          <p>Visualizing access and distances</p>
          <div className="map-box"><div className="map-box">
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1856.6318480715584!2d80.84058387137993!3d26.73025383115629!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1765292134636!5m2!1sen!2sin" 
            width="100%" 
            height="600" 
            style= {{border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe></div>
        </div>
      </div>

      </div>

    </section>
  );
}
