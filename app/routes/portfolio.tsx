import type { Route } from "./+types/portfolio";
import CompanyCard from "../components/CompanyCard";
import { companies } from "../data/companies";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Portfolio - LA Libraries" },
        { name: "description", content: "Our portfolio of domain-specific information platforms." },
    ];
}

export default function Portfolio() {
    return (
        <div>
            <header style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Portfolio</h1>
                <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px' }}>
                    Operating distinct businesses that share a common philosophy on data structure and retrieval.
                </p>
            </header>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {companies.map(company => (
                    <CompanyCard key={company.slug} company={company} />
                ))}
            </div>
        </div>
    );
}
