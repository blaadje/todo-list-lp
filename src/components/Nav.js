import React from "react"
import logo from "../images/logo.png"
import * as GlobalS from "../globalStyle"
import styled from "styled-components"
import { device } from "../globalStyle"

const S = {
  Nav: styled.nav`
    margin-top: 50px;
    display: flex;
    align-items: center;
    color: white;
  `,
  Img: styled.img`
    width: 40px;
    font-size: 25px;
    margin-right: 16px;
  `,
  LinksWrapper: styled.div`
    margin-left: auto;
    display: none;
    @media ${device.tablet} {
      display: flex;
    }
  `,
  Link: styled.a`
    text-decoration: none;
    color: #9be6ff;
    &:not(:last-child) {
      margin-right: 50px;
    }
  `,
}

export default ({ links, className }) => (
  <GlobalS.Container className={className}>
    <S.Nav>
      <S.Img src={logo} alt="Logo" />
      <span>Todolist</span>
      <S.LinksWrapper>
        {links.map(({ value, label }) => {
          return (
            <S.Link key={value} href={value}>
              {label}
            </S.Link>
          )
        })}
      </S.LinksWrapper>
    </S.Nav>
  </GlobalS.Container>
)
