import React, { useState } from "react";
import { Box } from "@mui/material";
import Tag from "./Tag";
import PostCard from "./post/PostCard";

const Main = () => {
    const [isResizing, setIsResizing] = useState(false);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row'}}>
            <Box sx={{ flexGrow: 0, flexBasis: { xs: '100%', md: '20%'}, paddingRight: { xs: '10px', md: 15 }}}>
                <Tag isResizing={isResizing} setIsResizing={setIsResizing} />
            </Box>
            <Box sx={{ flexGrow: 1, flexBasis: { xs: '100%', md: '60%'}, margin: 'auto' }}>
                <PostCard isResizing={isResizing} />
            </Box>
            <Box sx={{ flexGrow: 0, flexBasis: { xs: '0%', md: '20%'}}} />
        </Box>
    );
};

export default Main;
