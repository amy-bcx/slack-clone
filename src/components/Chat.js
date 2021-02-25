import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'


function Chat() {
    return (
        <Container >
            <Header>
                <Channel>
                    <ChannelName>
                        #AmanDev
                    </ChannelName>
                    <ChannelInfo>
                        Info
                    </ChannelInfo>

                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info/>


                </ChannelDetails>
                
            </Header>
            <MessageContainer style={{backgroundImage: "url(" + "https://s2.qwant.com/thumbr/0x0/6/b/ee6a0ad4d76f38aa25f9e24c742188f80fba3e880b869e195e811ad4d7e2ab/714070.jpg?u=https%3A%2F%2Fimages7.alphacoders.com%2F714%2F714070.jpg&q=0&b=1&p=0&a=1" + ")"}}>
                <ChatMessage/>
            </MessageContainer>
            <ChatInput/>
        </Container>
        
    )
}

export default Chat

const Container = styled.div`
display: grid;
grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(38, 39, 83,.13);
    justify-content: space-between;
    
`
const MessageContainer = styled.div`
    
`
const Channel = styled.div``

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;    
`   

const ChannelName = styled.div`
    font-weight: 700;
    `

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
    `
const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;

`