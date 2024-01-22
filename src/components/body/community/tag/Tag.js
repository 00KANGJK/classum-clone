import React, { useState, useEffect, useCallback } from "react";
import { Checkbox, FormControlLabel, Box, Typography } from "@mui/material";
import SvgTagIcon from "./SvgTagIcon";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';

const Tag = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [hoveredTag, setHoveredTag] = useState(null);
    const [isResizing, setIsResizing] = useState(false);
    const [initialX, setInitialX] = useState(0);
    const [width, setWidth] = useState(200);
    const tags = ["PPS Camp", "전체공지", "나의 첫 웹 서비스"];

    const handleToggle = (tag) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    const handleMouseDown = (event) => {
        event.preventDefault();
        setIsResizing(true);
        setInitialX(event.clientX);
    };

    const handleMouseUp = useCallback(() => {
        setIsResizing(false);
    }, []);

    const handleMouseMove = useCallback((event) => {
        if (isResizing) {
            const newWidth = width + event.clientX - initialX;
            setInitialX(event.clientX);
            const minResizeWidth = Math.max(100, window.innerWidth * 0.15);
            const maxResizeWidth = Math.min(300, window.innerWidth * 0.3);
            if (newWidth >= minResizeWidth && newWidth <= maxResizeWidth) {
                setWidth(newWidth);
            }
        }
    }, [isResizing, width, initialX]);


    useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, handleMouseMove, handleMouseUp]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: `${width}px`, position: 'relative' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {tags.map((tag, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <Checkbox
                                checked={selectedTags.includes(tag)}
                                onChange={() => handleToggle(tag)}
                                name={tag}
                                color="default"
                                checkedIcon={<CheckBoxIcon sx={{ fontSize: 18, color: 'black' }}/>}
                                icon={
                                    // 호버 상태에 따라 아이콘 변경
                                    hoveredTag === tag
                                        ? <CheckBoxOutlineBlankOutlinedIcon sx={{ fontSize: 18, color: 'black' }}/>
                                        : <SvgTagIcon sx={{ fontSize: 18, fontWeight:'bold', color:'black' }}/>
                                }
                                // 호버 상태 관리 이벤트 핸들러 추가
                                onMouseEnter={() => setHoveredTag(tag)}
                                onMouseLeave={() => setHoveredTag(null)}
                            />
                        }
                        label={<Typography sx={{ fontWeight: 'bold' }}>{tag}</Typography>}
                    />
                ))}
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: isResizing ? '3px' : '0.5px',
                    bgcolor:isResizing ? 'grey.500': 'grey.400',
                    cursor: 'col-resize',
                    '&:hover': { width: '3px', bgcolor: 'grey.500' }
                }}
                onMouseDown={handleMouseDown}
            />
        </Box>
    );
};

export default Tag;
