import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';

export default function BookmarkedItemCard({ img, name }) {
    return (

        <Card sx={{ maxWidth: 345, margin: 5 }}>
            <Paper elevation={3}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="hmm food"
                        sx={{ maxHeight: 300 }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Paper>
        </Card>

    );
}