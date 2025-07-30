import MetricCard from "./MetricCard";

export default function MetricGrid({ metrics, columns = 2 }) {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-2", 
    3: "grid-cols-3",
    4: "grid-cols-4"
  };
  
  return (
    <div className={`grid ${gridClasses[columns] || gridClasses[2]} gap-6 mt-8`}>
      {metrics.map((metric, i) => (
        <MetricCard 
          key={i} 
          value={metric.value} 
          label={metric.label} 
          icon={metric.icon}
        />
      ))}
    </div>
  );
}