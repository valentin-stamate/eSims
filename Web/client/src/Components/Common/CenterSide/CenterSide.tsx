import React from 'react'
import Evolve from '../../../assets/evolve.jpg'
import UAIC360 from '../../../assets/360uaic.png'
import {Card, Col, Row} from "react-bootstrap";
import Banner from "../Banner/Banner";

const centerSide = [
    {
        text: "Componentă Web destinată studenţilor.",
        title: "true"
    },
    {
        text: "Înregistrarea se poate face doar cu NUMARUL MATRICOL având structura standard: cel puţin 16 caractere alfanumerice!",
        title: "false"
    },
    {
        text: "Pentru cei interesaţi!",
        title: "true"
    },
    {
        text: "La fiecare 15 minute sunt şterse conturile blocate.",
        title: "true"
    },
    {
        text: "NU rezolvăm prin telefon probleme de conectare la eSIMS!",
        title: "false"
    },
    {
        text: "Echipa eSIMS asigură funcţionarea site-ului. Studenţii îşi creează, activează, blochează contul, recuperează parola etc.",
        title: "false"
    },
    {
        text: "Conectarea se face cu numărul matricol şi parola aleasă la crearea contului, se merge apoi la pagina Studenţi, apoi în stânga la meniul Note, taxe, click pe butonul Remove, apoi pe butonul Create and connect.",
        title: "false"
    },
    {
        text: "După 6 luni de neutilizare a contului, acesta va fi şters.",
        title: "false"
    },
    {
        text: "După mai multe tentative de conectare eşuate, contul este blocat şi apoi şters.",
        title: "false"
    },
    {
        text: "Utilizaţi adrese de email active unde să primiţi mesajul cu coordonatele de conectare. Indiferent dacă primiţi sau nu mesajul, mergeţi la login şi conectaţi-vă.",
        title: "false"
    },
    {
        text: "Creaţi-vă personal contul şi nu prin colegi, alte persoane, etc.",
        title: "false"
    },
    {
        text: "Nu se pot crea mai multe conturi folosind aceeaşi adresă de email.",
        title: "false"
    },
    {
        text: "După ştergerea contului acesta poate fi creat din nou.",
        title: "true"
    }
]

export default function CenterSide() {

    let content: JSX.Element[] = []

    for (let i = 0; i < centerSide.length; i++) {
        let item = centerSide[i];
        if (item.title === "true") {

            content.push(<h4 key={i} style={{textAlign:"center"}}>{item.text}</h4>)
        } else {
            content.push(<p key={i}>{item.text}</p>);
        }
    }

    return (
        <React.StrictMode>

            <Col>
                <Row>
                    <Banner />

                    <Card className="p-4 mt-3">
                        { content }
                    </Card>
                </Row>
            </Col>

        </React.StrictMode>
    );
}
