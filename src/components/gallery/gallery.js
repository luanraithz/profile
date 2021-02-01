import React from 'react'
import styled from 'styled-components'
import html from './pictures.html'

const Centered = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 100px;

    .img-wrapper {
        margin: 10px;
        height: 250px;
        cursor: pointer;
        overflow: hidden;
        border-radius: 2.08333% / 4.6875%;
    }
    img {
        border-radius: 2.08333% / 4.6875%;
        overflow: hidden;
        height: 100%;
    }
`

const Image = styled.img`
        border-radius: 2.08333% / 4.6875%;
        overflow: hidden;
        height: 100%;
`

const FullScreen = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    left: 0;
    top: 0;
`

const ImageContent = styled.div`
    height: 80vh;
`

const prevent = ev => {
    ev.stopPropagation()
    ev.preventDefault()
}

const CloseButton = styled.button`
    border: none;
    background: none;
    position: fixed;
    top: 0px;
    right: 10px;
    cursor: pointer;
    font-size: 3rem;
`

const Focused = ({ url, leave }) => {
  React.useEffect(() => {
    function handleEsc({code }) {
      if(code === "Escape") leave()
    }
    document.addEventListener("keydown", handleEsc)
    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [leave])
  return (
      <FullScreen onClick={leave}>
          <CloseButton title="Fechar" onClick={(ev) => {prevent(ev); leave();}}>
              <a className="icon fa fa-close" />
          </CloseButton>
        <ImageContent onClick={prevent}>
            <Image src={url} />
        </ImageContent>
      </FullScreen>
   )

}

export const Gallery = () => {
    const [focus, setFocus] = React.useState(null)

    function handleFocus(x) {
        setFocus({ url: x.target.src })
    }

    return (
        <React.Fragment>
            {focus && (<Focused url={focus.url} leave={() => setFocus(null)}/>)}
            <Centered dangerouslySetInnerHTML={{ __html: html }} onClick={handleFocus}>
            </Centered>
        </React.Fragment>
    )
}
