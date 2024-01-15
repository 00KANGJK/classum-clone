import React, { useState } from "react";
import { Checkbox, FormControlLabel, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Tag = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const tags = ["tag1", "tag2", "tag3"];

    const handleToggle = (value) => () => {
        const currentIndex = selectedTags.indexOf(value);
        const newChecked = [...selectedTags];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelectedTags(newChecked);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {tags.map((tag, index) => (
                <FormControlLabel
                    key={index}
                    control={
                        <Checkbox
                            checked={selectedTags.indexOf(tag) !== -1}
                            onChange={handleToggle(tag)}
                            name={tag}
                            color="default"
                            checkedIcon={<span style={{color: 'black',fontSize:'18px',width: '18px',display: 'inline-block'}}>✔</span>}
                            icon={<span style={{fontSize:'18px', fontWeight:'bold',color:'black',width: '18px',display: 'inline-block'}}>#</span>}
                        />
                    }
                    label={<Typography sx={{ fontWeight: 'bold' }}>{tag}</Typography>}
                />
            ))}
        </Box>
    );
};

export default Tag;
