import React, { ReactNode } from 'react'
import BgImage from '../assets/images/bg.jpeg'
import "./styles/home-layout.css"

interface HomeLayoutProps {
    children: ReactNode;
}

const cssBaseClassName = "home-layout"

export default function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div
            className={`${cssBaseClassName}`}
            style={{
                backgroundImage: `url(${BgImage})`,
            }} >
            <div className={`${cssBaseClassName}-overlay`} />
            <div className={`${cssBaseClassName}-content`} >
                {children}
            </div>
        </div>
    )
}
