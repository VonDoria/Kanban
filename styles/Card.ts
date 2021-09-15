import styled from 'styled-components';

export const CardContainer = styled.span`
    position: absolute;
    top: 40vh;
    left: 35vw;
    height: 20vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px;
    box-shadow: 1px 1px 3px 2px #0004;
    background-color: white;
    resize: both;
    overflow: auto;

    .title{
        border: none;
        border-bottom: 1px solid #9999;
        background-color: transparent;
        height: 2rem;
        padding: .3rem;
    }

    textarea{
        flex: 1;
        border: none;
        resize: none;
        overflow: hidden;
        background-color: transparent;
        margin: .5rem 0;
        padding: .3rem;
    }

    div{
        height: 1rem;
        background-color: #0004;
        border-radius: 5px;
        opacity: 0;
        transition: .3s;
        
        &:hover{
            opacity: 1;
        }

        display: flex;
        align-items: stretch;
        padding: .1rem;
    }

`;