interface Metric { value: string; label: string; }

export function MetricsStrip({ metrics }: { metrics: Metric[] }) {
  return <section className="impact-strip" aria-labelledby="impact-heading"><div className="container"><h2 id="impact-heading" className="sr-only">Research impact at a glance</h2><dl className="impact-grid">{metrics.map((metric) => <div className="impact-metric" key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl></div></section>;
}
