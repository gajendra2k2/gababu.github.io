import React,{Suspense} from 'react'
import './TypeWriter.css'
export const TypeWriter = (props) => {
    return <p className="line-1 anim-typewriter">{props.children}</p>
}