import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Main from './community/Main.js';
import ForumIcon from '@mui/icons-material/Forum';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

// 아이콘과 텍스트를 포함하는 컴포넌트
function TabLabel({ icon, text }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {icon}
            <span style={{ marginLeft: 5 }}>{text}</span>
        </div>
    );
}

export default function MenuBar() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper' }} >
            <Box borderTop={1} borderColor="divider">
                <AppBar position="static" style={{background:"white"}} elevation={0}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="black"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        TabIndicatorProps={{ style: { backgroundColor: '#000000' } }}
                        style={{color:"black"}}
                    >
                        <Tab label={value === 0 ? <TabLabel icon={<ForumIcon fontSize="medium" />} text="커뮤니티" /> : <TabLabel icon={<ForumOutlinedIcon fontSize="medium" />} text="커뮤니티" />} {...a11yProps(0)} style={{fontWeight:"bold", fontSize:"16px"}} />
                        <Tab label={value === 1 ? <TabLabel icon={<BeenhereIcon fontSize="medium" />} text="설문" /> : <TabLabel icon={<BeenhereOutlinedIcon fontSize="medium" />} text="설문" />} {...a11yProps(1)} style={{fontWeight:"bold", fontSize:"16px"}}/>
                        <Tab label={value === 2 ? <TabLabel icon={<SettingsIcon fontSize="medium" />} text="설정" /> : <TabLabel icon={<SettingsOutlinedIcon fontSize="medium" />} text="설정" />} {...a11yProps(2)} style={{fontWeight:"bold", fontSize:"16px"}}/>
                    </Tabs>
                </AppBar>
            </Box>
            <TabPanel
                value={value}
                index={0}
                dir={theme.direction}
                style={{backgroundColor: '#eff0f3'}}
            >
                <Main/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction} style={{backgroundColor: '#eff0f3'}}>
                준비 중....
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction} style={{backgroundColor: '#eff0f3'}}>
                준비 중....
            </TabPanel>
        </Box>
    );
}
