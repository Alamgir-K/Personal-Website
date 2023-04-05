import React from 'react'
import ProjectsData from './ProjectsData'
import ProjectItem from '../ProjectItem/ProjectItem'



export default function Projects() {
    return (
        <div className='grid grid-rows-2 grid-cols-2 gap-2 m-2 h-fit'
            id='landing-link-2'>
            <div>
                <ProjectItem item={ProjectsData[0]}></ProjectItem>
            </div>
            <div>
                <ProjectItem item={ProjectsData[1]}></ProjectItem>
            </div>
            <div>
                <ProjectItem item={ProjectsData[2]}></ProjectItem>
            </div>
            <div>
                <ProjectItem item={ProjectsData[3]}></ProjectItem>
            </div>
        </div>
    )
}
