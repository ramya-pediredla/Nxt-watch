import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`

export const PlayVideosTitle = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => props.color};
`

export const PlayVideosStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PlayVideosStatus = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`

export const PlayVideoDot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`

export const PlaySocialButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const SocialButton = styled.button`
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: #2563eb;
  color: ${props => props.color};
`

export const ButtonText = styled.span`
  margin-left: 5px;
  color: #2563eb;
  @media screen and (max- width: 576px) {
    display: none;
  }
`

export const Hrline = styled.hr`
  border: 1px solid #909090;
`

export const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
`

export const ChannelConatiner = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
  margin: 0px;
`

export const ChannelSubscribers = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
export const ChannelDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.color};
`

export const BtnContainer = styled.div`
  display: flex;
  background: none;
`
