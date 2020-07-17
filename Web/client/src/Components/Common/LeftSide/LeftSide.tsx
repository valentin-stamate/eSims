import React from 'react'
import {ListGroup, Row} from "react-bootstrap";

const linkList = [
    {
        sectionTitle: "Noutati",
        links: [
            {
                title: "De Interes General",
                link: "http://360.uaic.ro/",
            }
        ]
    },
    {
        sectionTitle: "Legaturi Rapide",
        links: [
            {
                title: "Wheather",
                link: "http://www.worldweather.org/"
            },
            {
                title: "Utile, loco",
                link: "http://www.laiasi.ro/"
            },
            {
                title: "MEC",
                link: "http://www.edu.ro/"
            },
            {
                title: "Bologna",
                link: "http://www.edu.ro/proces_bologna.htm"
            },
            {
                title: "Euro Univs, Top 100",
                link: "http://ed.sjtu.edu.cn/rank/2005/ARWU2005_TopEuro.htm"
            },
            {
                title: "Euro Univ, All",
                link: "http://www.4icu.org/Europe/"
            },
            {
                title: "USA Univs",
                link: "http://www.uwaterloo.ca/canu/"
            },
            {
                title: "Canada Univs",
                link: "http://www.uwaterloo.ca/canu/"
            },
            {
                title: "World Univs OL",
                link: "http://www.findaschool.org/"
            },
            {
                title: "Dictionaires",
                link: "http://dictionary.msn.com/"
            },
            {
                title: "Sfatul Medicului",
                link: "http://www.sfatulmedicului.ro/"
            },
        ]
    }
];

export default function LeftSide(props) {

    let items: JSX.Element[] = [];

    for (let i = 0; i < linkList.length; i++) {
        items.push(<ListGroup.Item key={i} variant="primary">{linkList[i].sectionTitle}</ListGroup.Item>)
        let link = linkList[i].links;
        for (let j = 0; j < link.length; j++) {
            items.push(<ListGroup.Item key={20 + j + i} variant="warning" action href={link[j].link}>{link[j].title}</ListGroup.Item>)
        }
    }

    return (
        <React.StrictMode>
            <ListGroup defaultActiveKey="#link1">
                {items}
            </ListGroup>


        </React.StrictMode>
    );
}
