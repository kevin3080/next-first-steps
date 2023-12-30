import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'Esta es la pagina contacto de la empresa',
};
export default function ContactPage() {
    return (
        <div>
            <h1 className="text-7xl font-bold">Contact Page</h1>
        </div>
    )
}