import "typeface-ubuntu"
import React from "react"
import { GlobalStyle } from "../globalStyle"
import TopSection from "../components/TopSection"
import MiddleSection from "../components/MiddleSection"
import BottomSection from "../components/BottomSection"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import "animate.css/animate.min.css"
import FontFaceObserver from "fontfaceobserver"
import styled from "styled-components"

const S = {
  Wrapper: styled.div`
    background: white;
  `,
}

export default () => {
  const links = [
    {
      value: "https://github.com/blaadje/Todo-list/projects/1",
      label: "roadmap",
    },
    {
      value: "https://github.com/blaadje/Todo-list/issues",
      label: "issues",
    },
  ]

  React.useEffect(() => {
    const loadFont = async () => {
      const font = new FontFaceObserver("Ubuntu")

      await font.load()

      document.documentElement.className += " fonts-loaded"
    }
    loadFont()
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Organise your tasks quickly and simply</title>
        <meta
          name="description"
          content="Todolist is the application which allows you to organise your tasks in a fast & simple way"
        />
        <link rel="canonical" href="http://todo-list.io/" />
      </Helmet>
      <GlobalStyle />
      <TopSection links={links} />
      <S.Wrapper>
        <MiddleSection />
        <BottomSection />
        <Footer links={links} />
      </S.Wrapper>
    </>
  )
}
