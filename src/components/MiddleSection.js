import React from "react"
import * as GlobalS from "../globalStyle"
import calendar from "../images/calendar.png"
import colorpicker from "../images/colorpicker.png"
import autoupdates from "../images/autoupdates.png"
import dragdrop from "../images/dragdrop.png"
import tags from "../images/tags.png"
import { device } from "../globalStyle"
import ScrollAnimation from "react-animate-on-scroll"

import styled from "styled-components"

const S = {
  Section: styled.section`
    text-align: center;
  `,
  Title: styled.h2`
    color: #4f79a4;
    font-size: 30px;
    margin: 0;
    padding-top: 40px;
    margin-bottom: 14px;
    font-weight: 500;
  `,
  SubTitle: styled.h3`
    margin: 0;
    color: #4f79a4;
    font-weight: 300;
    font-size: 30px;
  `,
  FeatureWrapper: styled.div`
    position: relative;
    text-align: left;
    box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.04);
    margin: 50px 0;
    @media ${device.desktop} {
      margin: 150px 0;
      box-shadow: none;
    }
    &:nth-child(even) {
      .feature {
        justify-content: flex-end;
      }
      .background {
        right: 0;
        left: initial;
        transform: rotate(180deg);
      }
    }
  `,
  Feature: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    @media ${device.tablet} {
      flex-direction: row;
    }
  `,
  Content: styled.div`
    z-index: 2;
    max-width: 450px;
  `,

  Description: styled.p`
    color: #8797b7;
    font-weight: 300;
    margin-top: 40px;
  `,
  Background: styled.svg`
    display: none;
    @media ${device.desktop} {
      display: block;
      position: absolute;
      top: -165px;
      width: 1100px;
      left: 0;
      bottom: 0;
      z-index: 1;
    }
  `,
  Img: styled.img`
    z-index: 2;
    border-radius: 0.2rem;
    box-shadow: 0px 0px 52px rgba(0, 0, 0, 0.14);
    margin: 40px;
    height: 350px;
  `,
}

export default () => {
  const features = [
    {
      title: "Get a trace of your tasks",
      subTitle: "with a calendar",
      description: `Navigate through the calendar to see your remaining tasks or to plan
      new tasks.`,
      imgUrl: calendar,
    },
    {
      title: "Customise the application",
      subTitle: "with a color picker",
      description: `Choose the color of your choice to define the whole application style
      to fit your desktop.`,
      imgUrl: colorpicker,
    },
    {
      title: "Categorize your tasks",
      subTitle: "by tags",
      description: `Assign tags to tasks and regroup them.`,
      imgUrl: tags,
    },
    {
      title: "Get new features automatically",
      subTitle: "with auto update",
      description: `Watch out for the red dot, it will download the latest published version and install it.`,
      imgUrl: autoupdates,
    },
    {
      title: "Priorize your tasks",
      subTitle: "with drag and drop",
      description: `Drag your tasks to refine the priority you want to make them`,
      imgUrl: dragdrop,
    },
  ]
  return (
    <S.Section>
      <S.Title>Get started</S.Title>
      <S.SubTitle>With a few usefull features</S.SubTitle>
      {features.map(({ title, subTitle, description, imgUrl }, index) => {
        const isEven = index % 2 === 0

        return (
          <S.FeatureWrapper key={title}>
            <ScrollAnimation
              animateOnce
              animateIn={isEven ? "slideInLeft" : "slideInRight"}
            >
              <S.Background
                className="background"
                viewBox="0 0 1568 1076"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d)">
                  <path
                    d="M-7.99993 70C108.111 248.964 441.217 240.747 1376.6 239.79C1443.43 239.722 1498 293.896 1498 360.723V728.557C1498 795.383 1443.41 849.55 1376.59 849.567C430.624 849.806 136.012 855.802 -8 1006L-7.99993 70Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d"
                    x="-78"
                    y="0"
                    width="1646"
                    height="1076"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="35" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </S.Background>
              <GlobalS.Container>
                <S.Feature className="feature">
                  <S.Content>
                    <S.Title>{title}</S.Title>
                    <S.SubTitle>{subTitle}</S.SubTitle>
                    <S.Description>{description}</S.Description>
                  </S.Content>
                  <S.Img src={imgUrl} alt={title} />
                </S.Feature>
              </GlobalS.Container>
            </ScrollAnimation>
          </S.FeatureWrapper>
        )
      })}
    </S.Section>
  )
}
