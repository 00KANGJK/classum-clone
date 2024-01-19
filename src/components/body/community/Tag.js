import React, { useState } from "react";
import { Checkbox, FormControlLabel, Box, Typography } from "@mui/material";
import SvgTagIcon from "./SvgTagIcon";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Tag = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const tags = ["PPS Camp", "전체공지", "나의 첫 웹 서비스"];

    const handleToggle = (tag) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    return (
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
                            icon={<SvgTagIcon sx={{ fontSize: 18, fontWeight:'bold', color:'black' }}/>}
                        />
                    }
                    label={<Typography sx={{ fontWeight: 'bold' }}>{tag}</Typography>}
                />
            ))}
        </Box>
    );
};

export default Tag;
