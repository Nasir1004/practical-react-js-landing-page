import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyle'

import { 
    InfoSec, 
    InfoRow, 
    InfoColumn, 
    TextWrapper,
    Topline,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
    } from './infoSection.element'

const InfoSection = ({
    primary, 
    lightBg,
    imgStart,
    lightTopLine,
    lightTextDec,
    buttonLabel,
    description,
    headline,
    lightText,
    topline,
    img,
    alt,
    start,
 }) => {
    return (
        <>
          <InfoSec lightBg={lightBg} >
              <Container>
                  <InfoRow imgStart={imgStart}>
                      <InfoColumn>
                          <TextWrapper>
                              <Topline lightTopLine={lightTopLine}>{topline}</Topline>
                              <Heading lightText={lightText}>{headline}</Heading>
                              <Subtitle lightTextDec={lightTextDec}>{description}</Subtitle>
                              <Link to='/sign-up'>
                                  <Button big fontBig primary={primary}>
                                      {buttonLabel}
                                  </Button>
                              </Link>
                          </TextWrapper>
                      </InfoColumn>
                      <InfoColumn>
                          <ImgWrapper start={start}>
                              <Img src={img} alt={alt} />
                          </ImgWrapper>
                      </InfoColumn>
                  </InfoRow>
              </Container>
          </InfoSec>
        </>
    )
}

export default InfoSection
