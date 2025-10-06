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
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
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