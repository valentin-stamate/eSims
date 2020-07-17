import React from "react";
import { Image } from "react-bootstrap";
import BannerUAIC from "./../../../assets/banner.jpg"
export default function Banner() {
    return (
        <React.StrictMode>
            <Image src={BannerUAIC} rounded style={{width: "100%"}}/>
        </React.StrictMode>
    );
}
