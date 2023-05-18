import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Grid, Pagination } from "@mui/material";
import "./Gallery.css";

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/photos?page=${currentPage}&client_id=vB3ZaMqyI4b6Z4FBzvepA_svQ5vY1t5Mqlg5t4X1UOg`
      );
      setPhotos(response.data);
    };

    fetchPhotos();
  }, [currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="container">
      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item xs={6} md={4} key={photo.id} className="contain">
            <Box className="photocontainer">
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="photo"
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Pagination
        className="Pagination"
        count={11} // set the total number of pages here
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Gallery;
