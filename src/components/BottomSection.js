import React from "react"
import styled from "styled-components"
import filterbackground from "../images/filterbackground.svg"
import filters from "../images/filters.png"
import { device } from "../globalStyle"
import * as GlobalS from "../globalStyle"
import ScrollAnimation from "react-animate-on-scroll"

const S = {
  Section: styled.section`
    height: 889px;
    background: url(${filterbackground});
    display: flex;
    align-items: center;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media ${device.desktop} {
      flex-direction: row;
    }
  `,
  Img: styled.img`
    width: 100%;
    box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.04);
    border-radius: 0.4rem;
    @media ${device.tablet} {
      width: 400px;
      margin-right: 4rem;
    }
    @media ${device.desktop} {
      width: 400px;
    }
  `,
  Title: styled.h1`
    font-size: 30px;
    color: white;
  `,
  Description: styled.p`
    color: #9be6ff;
  `,
  Content: styled.div`
    max-width: 480px;
  `,
}

export default () => (
  <S.Section>
    <GlobalS.Container>
      <ScrollAnimation animateIn="fadeInUp" animateOnce>
        <S.Wrapper>
          <S.Img src={filters} alt="filters" />
          <S.Content>
            <S.Title>Filter tasks</S.Title>
            <S.Description>
              Choose tasks to display by filtering them either by tags, date or
              status (to-do/completed).
            </S.Description>
          </S.Content>
        </S.Wrapper>
      </ScrollAnimation>
    </GlobalS.Container>
  </S.Section>
)
