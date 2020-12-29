import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from 'react';
import Box from '@material-ui/core/Box';

export default function Footer() {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" p={0.1} bgcolor="background.paper">
                <Box p={1} width="100%" bgcolor="grey.50">
                    <p>Vertugo by Aleksandar Dordevic</p>
                </Box>
                <Box p={1} flexShrink={1} bgcolor="grey.50">
                    <a href="https://www.linkedin.com/in/aleksandar-dordevic-418a39b5/">
                        <LinkedInIcon fontSize="large"/>
                    </a>
                </Box>
                <Box p={1} flexShrink={0} bgcolor="grey.50">
                    <a  href="https://github.com/gane11">
                        <GitHubIcon fontSize="large"/>
                    </a>
                </Box>
            </Box>
        </div>
    );
}