import React from "react";
import { Card } from "antd";
import { giphy } from "../api";

const GifCard = () => (
  <div className="gifcard">
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          // src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          src={giphy.data.images.original.url}
        />
      }
    >
      {giphy.data.title}
    </Card>
  </div>
);
export default GifCard;
