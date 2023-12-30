import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ['about page', 'Kevin', 'Informacion', 'Sobre mi'],
};

export default function AboutPage(){
    return (
        <>
            <span className='text-7xl font-bold'>About Page</span>
        </>
    )
}