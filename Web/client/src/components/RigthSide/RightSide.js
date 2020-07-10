import React from 'react'
import { Container } from '@material-ui/core'
import ContainerMD from '../ContainerMD/ContainerMD'
import LogoText from '../../assets/full-logo.svg'

export default function RightSide() {
  return (
    <div>
      <ContainerMD padding="2">
        <img src={LogoText} alt="Logo"/>
      </ContainerMD>

      <ContainerMD>
        
        <div style={{width:"80%", height:"240px", margin:"auto", backgroundColor:"#353535"}}/>
      </ContainerMD>
    </div>
  );
}