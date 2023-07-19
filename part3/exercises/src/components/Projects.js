import data from "./data.json"
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);

    function handleClick () {
        if (index < data.projects.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0)
        }
    }

    // Create a JavaScript variable that contains your list from data.json. 
    //Then set up a variable that contains the item in that list at the position determined by index.
    const projects = data.projects;
    let project = projects[index];

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h2>{project.id}Created by: {project.designer}</h2>
            <img src={project.url} alt={project.alt} />
        </div>
    )
}
