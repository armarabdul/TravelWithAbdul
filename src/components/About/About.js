import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import "./About.css";
import photo1 from "../../assets/photos/R.jpeg";
import photo2 from "../../assets/photos/s.jpg";
import photo3 from "../../assets/photos/t.jpg";
import photo4 from "../../assets/photos/u.jpg";
const About = () => {
  return (
    <div className="container3">
      <Typography variant="h2" component="h1" className="header1">
        ABOUT
      </Typography>
      <Typography
        className="description"
        style={{ fontSize: "18px", lineHeight: "1.7", color: "#262929" }}
      >
        Georgia is a country located in the Caucasus region of Eurasia. It is
        bordered by Russia to the north and northeast, Turkey and Armenia to the
        south, and Azerbaijan to the east. The capital and largest city of
        Georgia is Tbilisi. The official language is Georgian and the currency
        is the Lari. Georgia has a rich cultural heritage, with a history that
        dates back over 3,000 years. The country is known for its traditional
        music, dance, and cuisine, as well as its ancient Christian churches and
        monasteries. The country is also known for its wine-making traditions
        which are ancient, and wine culture is an important part of Georgian
        culture. Georgia has a semi-presidential representative democratic
        republic form of government. The President of Georgia is the head of
        state and the Prime Minister is the head of government. The country has
        a unicameral parliament called the Sakartvelos Parlamenti. Georgia has a
        diverse landscape that ranges from the snowy peaks of the Greater
        Caucasus Mountains to the subtropical Black Sea coast. The country has a
        diverse range of flora and fauna, including many endemic species. It's
        also well-known for its mineral water springs, and is a popular
        destination for tourists looking for hiking, skiing, and other outdoor
        activities.
      </Typography>
      <Grid container spacing={2} className="photoGrid">
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia image={photo1} title="Gudauri" style={{ height: 200 }} />
            <CardContent>
              <Typography variant="subtitle1" component="h2">
                Gudauri
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia image={photo2} title="Photo 2" style={{ height: 200 }} />
            <CardContent>
              <Typography variant="subtitle1" component="h2">
                Stepantsminda
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia image={photo3} title="Photo 3" style={{ height: 200 }} />
            <CardContent>
              <Typography variant="subtitle1" component="h2">
                Batumi
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia image={photo4} title="Photo 4" style={{ height: 200 }} />
            <CardContent>
              <Typography variant="subtitle1" component="h2">
                Sighnaghi
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
