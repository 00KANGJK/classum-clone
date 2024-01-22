import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Tag from "./tag/Tag";
import PostCard from "./post/PostCard";
import PostForm from "./post/PostForm";

const Main = () => {
    const [postCards, setPostCards] = useState(Array.from({length: 10}));
    const [loading, setLoading] = useState(false);

    const fetchMoreData = () => {
        setLoading(true);
        setTimeout(() => {
            setPostCards(prevPostCards => [...prevPostCards, ...Array.from({length: 10})]);
            setLoading(false);
        }, 1500);
    };

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

        if (scrollHeight - scrollTop === clientHeight) {
            fetchMoreData();
        }
    };

    return (
        <Box sx={{display: 'flex', flexDirection: 'row', height: "900px"}}>
            <PostForm/>
            <Box sx={{flexGrow: 0, flexBasis: {xs: '100%', md: '20%'}, paddingRight: {xs: '10px', md: 15}}}>
                <Tag/>
            </Box>
            <Box sx={{
                flexGrow: 1,
                flexBasis: {xs: '100%', md: '60%'},
                margin: 'auto',
                overflowY: 'auto',
                maxHeight: '900px'
            }}
                 onScroll={handleScroll}>
                {postCards.map((_, i) => (
                    <PostCard key={i}/>
                ))}
                {loading && 'Loading...'}
            </Box>
            <Box sx={{flexGrow: 0, flexBasis: {xs: '0%', md: '20%'}}}/>
        </Box>
    );
};

export default Main;
