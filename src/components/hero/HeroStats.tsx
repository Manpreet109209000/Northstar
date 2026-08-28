const stats = [
  {
    value: "5+",
    label: "Production Projects",
  },
  {
    value: "MERN",
    label: "Full-Stack Focus",
  },
  {
    value: "2023/2028",
    label: "CS Abroad Goal",
  },
];

export default function HeroStats() {
  return (
    <div className="hero-stats">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}