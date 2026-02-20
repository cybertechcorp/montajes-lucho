export default function FeatureIcon({ icon = "✅", title, desc }) {
  return (
    <div className="feature-icon">
      <div className="feature-emoji">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}