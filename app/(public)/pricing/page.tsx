import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'Esta es la pagina de precio de mi servicio',
};

export default function PricingPage() {
    return (
        <div>
            <h1 className="text-7xl font-bold">Pricing Page</h1>
        </div>
    )
}