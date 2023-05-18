import {
  Link as MaterialLink,
  createStyles,
  withStyles,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
import "./Home.css";

const styles = createStyles({
  root: {
    color: "grey",
    textDecoration: "none",
    "&:hover": {
      color: "#ADD8E6",
      textDecoration: "none",
    },
  },
});

const Link = withStyles(styles)(MaterialLink);

function Home() {
  return (
    <>
      <Box sx={{ marginLeft: "12%", marginTop: "13%" }}>
        <h1 className="header">
          TRAVEL WITH
          <br />
          <span className="span">ABDUL</span>
        </h1>
        <ul
          className="ul"
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            fontSize: "20px",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
            maxWidth: "10%",
          }}
        >
          <li>
            <Link href="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link href="Blog">Blog</Link>
          </li>
          <li>
            <Link href="About">About</Link>
          </li>
          <li>
            <Link href="Contact">Contact</Link>
          </li>
        </ul>
        <div className="Social">
          <Link href="https://github.com/armarabdul">
            <GitHubIcon />
          </Link>
          <Link
            href="www.linkedin.com/in/
            abdul-muqeet-a1786619b"
          >
            <LinkedInIcon />
          </Link>
          <Link href="google.com">
            <LanguageIcon />
          </Link>
        </div>
        <div
          style={{
            color: "grey",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            maxWidth: "12%",
            marginTop: "1%",
            fontFamily: "'Roboto', sans-serif",
            fontSize: "15px",
          }}
        >
          <CopyrightRoundedIcon sx={{ fontSize: "15px" }} /> 2022-2023 by Abdul
        </div>
      </Box>
    </>
  );
}

export default Home;
