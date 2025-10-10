import React,{Suspense} from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing } from '../components';

const About = React.lazy(() => import('../components/About/About'));
const Skills = React.lazy(() => import('../components/Skills/Skills'));
const Education = React.lazy(() => import('../components/Education/Education'));
const Books = React.lazy(() => import('../components/Books/Books'));
const Contacts = React.lazy(() => import('../components/Contacts/Contacts'));
const Experience = React.lazy(() => import('../components/Experience/Experience'));
import {headerData} from '../data/headerData'
export const Main = () => {
    const canonicalUrl = 'https://gababu.com';
    const siteName = 'Gajendra Babu Thokala - Portfolio';
    const defaultDescription = headerData.description[0];
    const defaultTitle = `${headerData.name} - ${headerData.title}`;

    return (
        <div>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>{defaultTitle}</title>
                <meta name="title" content={defaultTitle} />
                <meta name="description" content={defaultDescription} />
                <meta name="keywords" content="Engineering Leader, Data Engineering, Kafka, Flink, Cassandra, NoSQL, Knowledge Graph, Distributed Systems, Real-time Streaming, Technical Leadership, Software Architecture" />
                <meta name="author" content={headerData.name} />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={defaultTitle} />
                <meta property="og:description" content={defaultDescription} />
                <meta property="og:image" content={headerData.image} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={canonicalUrl} />
                <meta property="twitter:title" content={defaultTitle} />
                <meta property="twitter:description" content={defaultDescription} />
                <meta property="twitter:image" content={headerData.image} />
                <meta property="twitter:creator" content="@gababu" />
                <meta property="twitter:site" content="@gababu" />

                {/* Additional SEO tags */}
                <meta name="theme-color" content="#000000" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="application-name" content={siteName} />

                {/* Structured Data for Google */}
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": headerData.name,
                    "jobTitle": headerData.title,
                    "description": defaultDescription,
                    "image": headerData.image,
                    "url": canonicalUrl,
                    "sameAs": [
                        "https://linkedin.com/in/gajendrababu",
                        "https://github.com/gajendra2k2",
                        "https://medium.com/@gababu"
                    ],
                    "knowsAbout": [
                        "Data Engineering",
                        "Apache Kafka",
                        "Apache Flink",
                        "Cassandra",
                        "NoSQL Databases",
                        "Knowledge Graphs",
                        "Distributed Systems",
                        "Real-time Streaming",
                        "Technical Leadership",
                        "Software Architecture"
                    ]
                })}
                </script>
            </Helmet>
            <Navbar/>
            <Landing />
            <Suspense fallback={<div>Loading...</div>}>
            <About />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <Skills />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <Experience />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <Education />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
            <Books />
            </Suspense>
            {/* <Blog /> */}
            <Suspense fallback={<div>Loading...</div>}>
            <Contacts />
            </Suspense>
            {/* <Footer /> */}
            </div>
    )
}