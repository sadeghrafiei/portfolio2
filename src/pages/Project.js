import React from 'react'
import ButtonsBottom from '../component/ButtonsBottom'
import Logo from '../component/Logo'
import Mouse from '../component/Mouse'
import Navigation from '../component/Navigation'
import Projects from '../component/Projects'

export const Project1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Projects projectNumber={0} />
                <ButtonsBottom left={'/'} right={'/project-2'} />
            </div>
        </main>
    )
}

export const Project2 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Projects projectNumber={1} />
                <ButtonsBottom left={'/project-1'} right={'/project-3'} />
            </div>
        </main>
    )
}
export const Project3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Projects projectNumber={2} />
                <ButtonsBottom left={'/project-2'} right={'/project-4'} />
            </div>
        </main>
    )
}
export const Project4 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Projects projectNumber={3} />
                <ButtonsBottom left={'/project3'} right={'/contact'} />
            </div>
        </main>
    )
}