import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 230px;
    margin-right: 20px;
  }
`

export const GamingThumbnailImage = styled.img`
  width: 100vw;
  height: 360px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 240px;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const GamingTitle = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 0px;
`

export const GamingViewAndDate = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => props.color};
`
