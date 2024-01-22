import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Comment() {
    const messages = [
        {
            sender: "Ali Connors",
            content: "I'll be in your neighborhood doing errands this…",
            date: new Date(2024, 0, 20).toLocaleDateString()
        },
        {
            sender: "Scott, Alex, Jennifer",
            content: "Wish I could come, but I'm out of town this…",
            date: new Date(2024, 0, 21).toLocaleDateString()
        },
        {
            sender: "Sandra Adams",
            content: "Do you have Paris recommendations? Have you ever…",
            date: new Date(2024, 0, 22).toLocaleDateString()
        },
        {
            sender: "Sandra Adams",
            content: "Do you have Paris recommendations? Have you ever…",
            date: new Date(2024, 0, 22).toLocaleDateString()
        },
        {
            sender: "Ali Connors",
            content: "I'll be in your neighborhood doing errands this…",
            date: new Date(2024, 0, 20).toLocaleDateString()
        }

    ];

    return (
        <List sx={{ width: '100%', bgcolor: 'transparent', height:'530px', overflow:'auto' }}>
            {messages.map((message, index) => (
                <React.Fragment key={index}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={message.sender} sx={{width: '30px', height: '30px',}} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={message.sender}
                            secondary={
                                <React.Fragment>
                                    <Box
                                        sx={{
                                            bgcolor: 'background.paper',
                                            borderRadius: '10px',
                                            p: 1,
                                            mt: 1,
                                        }}
                                        style={{maxWidth:'300px'}}
                                    >
                                        <Typography variant="body2" color="text.primary" >
                                            {message.content}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        {message.date}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </React.Fragment>
            ))}
        </List>
    );
};

export default Comment;
