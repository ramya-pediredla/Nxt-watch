import styled from 'styled-components'

export const NoVideosView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-height: 768px) {
    width: 450px;
  }
`

export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  color: ${props => props.headingColor};
`
export const NoVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => props.noteColor};
`

export const RetryButton = styled.button`
  border: none;
  background-color: #4ff6e3;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding: 5px;
  font-family: 'Roboto';
  font-size: 15px;
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
