import React from 'react'
import ContainerMD from '../ContainerMD/ContainerMD';
import { List, ListItem, ListItemText, Container } from '@material-ui/core';
import Banner from '../../assets/banner.jpg'
import Evolve from '../../assets/evolve.jpg'
import UAIC360 from '../../assets/360uaic.png'

const homeContent = [
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

export default function HomeContent() {

  let content = []

  for (let i = 0; i < homeContent.length; i++) {
    let item = homeContent[i];
    if (item.title === "true") {
      content.push(<h3 style={{textAlign:"center"}}>{item.text}</h3>)
    } else {
      content.push(<p>{item.text}</p>);
    }
  }

  return (
    <div>
      <Container padding={0} style={{padding:"0", marginTop:"1rem"}}>
        <img src={Banner} style={{width:"100%"}}/>
      </Container>

      <ContainerMD padding="2">
        {content}
      </ContainerMD>
      
      <ContainerMD>
        <img src={Evolve} style={{width:"90%"}} className="center-img"/>
        <img src={UAIC360} style={{width:"90%", marginTop:"1rem"}} className="center-img"/>
      </ContainerMD>
      
    </div>
  );
}