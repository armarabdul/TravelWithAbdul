import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import "./Blog.css";

const Blog = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos?client_id=vB3ZaMqyI4b6Z4FBzvepA_svQ5vY1t5Mqlg5t4X1UOg"
        );
        setPhotos(response.data);
      } catch (error) {
        console.log("Error fetching photos from Unsplash:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Grid container spacing={1} className="container2">
      {photos.map((photo) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={photo.id}>
          <Card>
            <CardMedia
              image={photo.urls.regular}
              title={photo.alt_description}
              style={{ height: 400 }}
            />
            <CardContent>
              <Typography variant="h5" component="h2">
                {photo.title ? photo.title : "No Title"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {photo.description ? photo.description : "No Description"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
