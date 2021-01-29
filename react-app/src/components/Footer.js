import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import Box from '@material-ui/core/Box';

export default function Footer() {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" p={0.1} bgcolor="background.paper">
                <Box p={1} width="100%" bgcolor="grey.50">
                    <a className="link" href="https://gane11.github.io/Aleksandar-Dordevic/">
                    <p>Vertugo by Aleksandar Dordevic</p>
                    </a>
                </Box>
                <Box p={1} flexShrink={1} bgcolor="grey.50">
                    <a className="link" href="https://www.linkedin.com/in/aleksandar-dordevic-418a39b5/">
                        <LinkedInIcon style={{ fontSize: 65 }}/>
                    </a>
                </Box>
                <Box p={1} flexShrink={0} bgcolor="grey.50">
                    <a className="link"  href="https://github.com/gane11">
                        <GitHubIcon style={{ fontSize: 65 }}/>
                    </a>
                </Box>
            </Box>
        </div>
    );
}