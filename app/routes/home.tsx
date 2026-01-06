import { Link } from "react-router";
import type { Route } from "./+types/home";
import CompanyCard from "../components/CompanyCard";
import { companies } from "../data/companies";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "LA Libraries" },
		{ name: "description", content: "A holding & operating company building domain-specific information platforms." },
	];
}

export default function Home() {
	return (
		<div>
			<section className="section" style={{ padding: '6rem 0' }}>
				<h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
					LA Libraries
				</h1>
				<p style={{ fontSize: '1.5rem', color: '#555', maxWidth: '600px' }}>
					A holding & operating company building domain-specific information platforms.
				</p>
			</section>

			<section className="section">
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
					<h2 style={{ fontSize: '1.8rem', margin: 0 }}>Portfolio</h2>
					<Link to="/portfolio" style={{ fontSize: '1rem' }}>View All &rarr;</Link>
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
					{companies.slice(0, 2).map(company => (
						<CompanyCard key={company.slug} company={company} />
					))}
				</div>
			</section>

			<section className="section">
				<h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Operating Principles</h2>
				<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
					<div>
						<h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Frictionless Discovery</h3>
						<p style={{ color: '#666', fontSize: '0.95rem' }}>
							We build interfaces that reduce the time between intent and access. Search is the primary primitive.
						</p>
					</div>
					<div>
						<h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Structured Indexing</h3>
						<p style={{ color: '#666', fontSize: '0.95rem' }}>
							Turning messy open-web data into structured, queryable assets. We value precision over scale.
						</p>
					</div>
					<div>
						<h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Trust & Provenance</h3>
						<p style={{ color: '#666', fontSize: '0.95rem' }}>
							In an age of synthetic media, we prioritize verifiable data sources and immutable history.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
