import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import vectorbackground from "../images/vectorbackground.svg"
import bluebackground from "../images/bluebackground.svg"
import appyellow from "../images/appyellow.png"
import appblue from "../images/appblue.png"
import appred from "../images/appred.png"
import wave1 from "../images/wave1.svg"
import wave2 from "../images/wave2.svg"
import wave3 from "../images/wave3.svg"
import { device } from "../globalStyle"
import Parallax from "parallax-js"

const S = {
  Section: styled.section`
    width: 100%;
    background: url(${bluebackground});
    position: relative;
    text-align: center;
    overflow: hidden;
    height: 80vh;
    @media ${device.desktop} {
      height: 100vh;
    }
  `,
  Background: styled.div`
    background: url(${vectorbackground});
    position: absolute !important;
    top: -100px !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100%;
    height: 100%;
  `,
  Nav: styled(Nav)`
    position: relative !important;
    z-index: 3;
    pointer-events: all;
  `,
  TopContent: styled.div`
    position: absolute;
    left: 0 !important;
    right: 0 !important;
    margin-bottom: 300px;
    margin: 0 auto;
    margin-top: 150px;
    text-align: center;
    max-width: 640px;
    pointer-events: all;
  `,
  Title: styled.h1`
    color: white;
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 30px;
  `,
  SubTitle: styled.h3`
    color: white;
    margin: 0;
    max-width: 539px;
    margin: 0 auto;
    font-weight: 300;
    margin-bottom: 40px;
  `,
  DownloadsWrapper: styled.div`
    margin: 0 auto;
    text-align: left;
    position: relative;
    display: inline-flex;
    flex-direction: column;
  `,
  ButtonsWrapper: styled.div`
    flex-direction: column;
    display: inline-flex;
    margin-bottom: 19px;
    justify-content: center;
    @media ${device.tablet} {
      flex-direction: row;
    }
  `,
  PimaryButton: styled.button`
    cursor: pointer;
    flex-shrink: 0;
    background: rgba(9, 9, 9, 0.2);
    color: white;
    margin-bottom: 20px;
    width: 100%;
    @media ${device.tablet} {
      width: auto;
      margin-bottom: 0;
      margin-right: 20px;
    }
  `,
  SecondaryButton: styled.button`
    cursor: pointer;
    flex-shrink: 0;
    background: transparent;
    color: white;
    box-shadow: inset 0px 0px 0px 1px white;
  `,
  Distributions: styled.span`
    align-self: flex-start;
    width: 100%;
    display: block;
    font-size: 13px;
    color: white;
    font-weight: 300;
  `,
  ImagesWrapper: styled.div`
    display: none !important;
    position: absolute !important;
    width: 100%;
    top: initial !important;
    @media ${device.tablet} {
      bottom: -60% !important;
      display: inline-block !important;
      margin: 0 auto;
    }
    @media ${device.desktop} {
      bottom: -45% !important;
    }
  `,
  Img: styled.img`
    box-shadow: 0px 0px 46px rgba(0, 0, 0, 0.13);
    position: relative !important;
    display: inline-block !important;
    @media ${device.tablet} {
      width: 300px;
    }
    @media ${device.desktop} {
      width: 450px;
    }
    &.blue {
      position: absolute !important;
      top: -130px !important;
      left: 36.5% !important;
      z-index: 1;
    }
  `,
  Waves: styled.div`
    position: absolute;
    bottom: -100px !important;
    left: 0 !important;
    right: 0 !important;
    z-index: 2;
    width: 100%;
  `,
  Wave: styled.img`
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    right: 0 !important;
    top: initial !important;
    width: 100%;
    z-index: 2;
  `,
  Link: styled.a`
    cursor: pointer;
  `,
}

const MAC = { name: "mac", executable: "dmg" }
const WINDOWS = { name: "windows", executable: "exe" }
const LINUX = { name: "linux", executable: "appimage" }

const getOS = () => {
  const { platform } = typeof window !== "undefined" && window.navigator
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"]
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"]

  if (macosPlatforms.includes(platform)) {
    return MAC
  }

  if (windowsPlatforms.includes(platform)) {
    return WINDOWS
  }

  if (/Linux/.test(platform)) {
    return LINUX
  }

  return {}
}

export default ({ links }) => {
  const [downloadLink, setDownloadLink] = React.useState()

  React.useEffect(() => {
    const fetchDownloadLink = async () => {
      let link = null
      const response = await fetch(
        "https://api.github.com/repos/blaadje/Todo-list/releases/latest"
      )
      const { assets = [] } = await response.json()

      assets.forEach(({ name, browser_download_url }) => {
        if (name.includes(getOS().executable) && !name.includes("blockmap")) {
          link = browser_download_url
          return
        }
      })

      setDownloadLink(link)
    }

    const scene = document.getElementById("scene")
    const scene2 = document.getElementById("scene2")
    const scene3 = document.getElementById("scene3")
    new Parallax(scene)
    new Parallax(scene2)
    new Parallax(scene3)

    fetchDownloadLink()
  }, [])

  const { name = "" } = getOS()

  return (
    <S.Section id="scene">
      <S.Background data-depth="0.4" alt="background" />
      <S.Nav links={links} />
      <S.TopContent data-depth="0.8">
        <S.Title>It's time to be productive</S.Title>
        <S.SubTitle>
          Todolist is the application which allows you to organise your tasks in
          a fast & simple way
        </S.SubTitle>
        <S.DownloadsWrapper>
          <S.ButtonsWrapper>
            <S.Link href={downloadLink}>
              <S.PimaryButton>Download for {name}</S.PimaryButton>
            </S.Link>
            <S.Link
              rel="nofollow"
              target="_blank"
              href="https://github.com/blaadje/Todo-list/releases/latest"
            >
              <S.SecondaryButton>All platforms versions</S.SecondaryButton>
            </S.Link>
          </S.ButtonsWrapper>
          <S.Distributions>macOS, Windows, and Linux</S.Distributions>
        </S.DownloadsWrapper>
      </S.TopContent>
      <S.ImagesWrapper id="scene2">
        <S.Img
          data-depth="0.5"
          className="yellow"
          src={appyellow}
          alt="appyellow"
        />
        <S.Img data-depth="0.6" className="blue" src={appblue} alt="appblue" />
        <S.Img data-depth="0.5" className="red" src={appred} alt="appred" />
      </S.ImagesWrapper>
      <S.Waves id="scene3">
        <S.Wave data-depth-y="0.5" data-depth-x="0" src={wave1} alt="wave" />
        <S.Wave data-depth-y="0.6" data-depth-x="0" src={wave2} alt="wave" />
        <S.Wave data-depth-y="0.7" data-depth-x="0" src={wave3} alt="wave" />
      </S.Waves>
    </S.Section>
  )
}
