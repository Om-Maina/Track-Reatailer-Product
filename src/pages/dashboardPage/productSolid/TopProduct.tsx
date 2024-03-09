import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import NamePicker from "../../../components/namePicker/NamePicker";
import "./TopProduct.css";

const componentStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  width: "170.305px",
  height: "200px",
  borderRadius: "4px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  flex: "1",
  margin: "10px 5px",
};

const YourComponent: React.FC = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Grid item xs={12} md={4}>
        <Paper
          style={{
            top: 5,
            bottom: 0,
            margin: "2%",
            height: "100%",
          }}
        >
          <div className="Product-Heading">
            <Typography id="Product-Produced" style={{ margin: "10px" }}>
              Top 5 Products Produced
            </Typography>
            <div id="NamePicker">
              <NamePicker />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Card style={componentStyle}>
              <CardContent>
                <div className="Image-box">
                  <img
                    id="product-image"
                    src="/images/Product/Butter.png"
                  ></img>
                </div>
                <div id="items">
                  <Typography id="top-serial-number">#01</Typography>
                  <Typography id="product-name">Butter</Typography>
                </div>
              </CardContent>
            </Card>
            <Card style={componentStyle}>
              <CardContent>
                <div className="Image-box">
                  <img id="product-image" src="/images/Product/Dahi.png"></img>
                </div>
                <div id="items">
                  <Typography id="top-serial-number">#02</Typography>
                  <Typography id="product-name">Dahi</Typography>
                </div>
              </CardContent>
            </Card>
            <Card style={componentStyle}>
              <CardContent>
                <div className="Image-box">
                  <img id="product-image" src="/images/Product/Ghee.png"></img>
                </div>
                <div id="items">
                  <Typography id="top-serial-number">#03</Typography>
                  <Typography id="product-name">Ghee</Typography>
                </div>
              </CardContent>
            </Card>
            <Card style={componentStyle}>
              <CardContent>
                <div className="Image-box">
                  <img
                    id="product-image"
                    src="/images/Product/Paneer.png"
                  ></img>
                </div>
                <div id="items">
                  <Typography id="top-serial-number">#04</Typography>
                  <Typography id="product-name">Paneer</Typography>
                </div>
              </CardContent>
            </Card>
            <Card style={componentStyle}>
              <CardContent>
                <div className="Image-box">
                  <img
                    id="product-image"
                    src="/images/Product/Chesses.png"
                  ></img>
                </div>
                <div id="items">
                  <Typography id="top-serial-number">#05</Typography>
                  <Typography id="product-name">Cheese</Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default YourComponent;
