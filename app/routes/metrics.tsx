import type { Route } from "./+types/metrics";
import MetricCard from "../components/MetricCard";
import { companies } from "../data/companies";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Metrics - LA Libraries" },
    ];
}

export default function Metrics() {
    // Simple aggregation for demo purposes
    const totalCompanies = companies.length;
    // This is just synthetic for the demo since we have strings in data
    const totalUsers = "97,500+";
    const uptime = "99.98%";

    return (
        <div>
            <header style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Aggregated Metrics</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px' }}>
                    Public transparency report across our portfolio.
                </p>
            </header>

            <section className="section">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Roll-up Stats</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    <MetricCard label="Active Portfolio Companies" value={totalCompanies.toString()} />
                    <MetricCard label="Total Indexed Users" value={totalUsers} />
                    <MetricCard label="Global Uptime" value={uptime} />
                </div>
            </section>

            <section className="section">
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Subsidiary Performance</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {companies.map(c => (
                        <div key={c.slug} style={{
                            padding: '1.5rem',
                            border: '1px solid #eee',
                            borderRadius: '8px',
                            background: '#fafafa'
                        }}>
                            <h3 style={{ margin: '0 0 1rem 0' }}>{c.name}</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {c.metrics.slice(0, 2).map(m => (
                                    <div key={m.label}>
                                        <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{m.value}</div>
                                        <div style={{ fontSize: '0.8rem', color: '#666' }}>{m.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
