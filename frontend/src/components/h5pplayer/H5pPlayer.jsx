import React from "react";
import { server } from "../../main";

const H5pPlayer = ({ fileUrl }) => {
  return <iframe src={`${server}/${fileUrl}`}></iframe>;
};

export default H5pPlayer;
