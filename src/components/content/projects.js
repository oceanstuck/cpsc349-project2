import './projects.css';
import { List } from '@mui/material';
import { ListItem as Li } from '@mui/material';

const Projects = () =>
{
    return(
        <div className="projects">
            <h2>Projects</h2>
            <List>
                <Li>This site</Li>
                <Li>BMD merging through <a href="https://github.com/Sewer56/FileEmulationFramework">File Emulation Framework</a></Li>
                <Li>AWB and file unpacking functionality contribution to <a href="https://github.com/TekkaGB/AemulusModManager">Aemulus Package Manager</a></Li>
            </List>
        </div>
    );
}

export default Projects;