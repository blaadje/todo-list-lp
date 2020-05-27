import React from "react"
import logo from "../images/logo.png"
import * as GlobalS from "../globalStyle"
import styled from "styled-components"
import { device } from "../globalStyle"

const S = {
  Img: styled.img`
    width: 40px;
    margin-right: 16px;
  `,
  Logo: styled.span`
    font-weight: 500;
  `,
  LogoWrapper: styled.span`
    flex: 1;
    display: flex;
    align-items: center;
  `,
  Footer: styled.footer`
    align-items: center;
    color: #27a0df;
    display: flex;
    padding: 100px 0 50px 0;
    flex-direction: column;
    @media ${device.tablet} {
      flex-direction: row;
    }
  `,
  CopyRights: styled.span`
    flex: 1;
    font-weight: 300;
    margin-top: 20px;
    @media ${device.tablet} {
      margin-top: 0px;
    }
  `,
  LinksWrapper: styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    text-align: center;
    margin-top: 20px;
    @media ${device.tablet} {
      margin-top: 0;
      text-align: left;
      margin-left: auto;
    }
  `,
  Link: styled.a`
    color: #27a0df;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  `,
}

export default ({ links }) => (
  <GlobalS.Container>
    <S.Footer>
      <S.LogoWrapper>
        <S.Img src={logo} alt="Logo" />
        <S.Logo>Todolist</S.Logo>
      </S.LogoWrapper>
      <S.CopyRights>© 2020 Alexandre Charlot</S.CopyRights>
      <S.LinksWrapper>
        {links.map(({ value, label }) => {
          return (
            <S.Link key={value} href={value}>
              {label}
            </S.Link>
          )
        })}
      </S.LinksWrapper>
    </S.Footer>
  </GlobalS.Container>
)
