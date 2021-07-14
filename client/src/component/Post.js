import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Post({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    {console.log(post)}
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Avatar alt="Remy Sharp" src={post.owner.image ? post.owner.image.url : "./images/default.jpg"} />
                        <span>{`${post.owner.firstname} ${post.owner.lastname} `}</span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post.description}
                    </Typography>
                </CardContent>
                {post.image && <CardMedia
                    component="img"
                    alt="post image"
                    style={{ height: 250, width: 400 }}
                    image={post.image.url}
                    title={'my title'}
                />}
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}