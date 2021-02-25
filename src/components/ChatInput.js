import React from 'react'
import styled from 'styled-components'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';


function ChatInput() {
    return (
        <Container>

           <InputContainer>
            <form>
                <input type="text" placeholder="Express yourself here... =)" />
                <SendButton>
                    <Send/>
                </SendButton>
            </form>
            <CommentButton>
                <Icon1 />
                <Icon2 />
                <Icon3 />
                <Icon4 />
                
                </CommentButton>
           </InputContainer>
            
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
    padding-top: 20px;
    background: #F1F1F5;
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            font-size: 13 px;
            outline: none;
            background: #F1F1F5;
        
        }
        

        input :focus {
            outline: none;
        }
    }
`

const SendButton = styled.div`
    background: #088A68;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #04B486;
    }
`
const Send = styled(SendOutlinedIcon)`
    color: #D9D9D9;
`
const CommentButton = styled.div`
    display: flex;

`
const Icon1 = styled(SentimentVerySatisfiedOutlinedIcon)`
display: flex;
:hover {
    background: #04B486;
}
`
const Icon2 = styled(ImageOutlinedIcon)`
display: flex;
:hover {
    background: #04B486;
}
`
const Icon3 = styled(MicNoneOutlinedIcon)`
display: flex;
:hover {
    background: #04B486;
}
`
const Icon4 = styled(AddOutlinedIcon)`
display: flex;
:hover {
    background: #04B486;
}
`