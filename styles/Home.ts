import styled from 'styled-components';

export const HomeContainer = styled.div`
    position: relative;
    min-height: 100vh;
    min-width: 100vw;
    
    >div{
        background-image: linear-gradient(to right, red , yellow);
        position: absolute;
        overflow: hidden;
        height: 100%;
        width: 100%;
        
        >main{
            position: absolute;
            height: 300%;
            width: 300%;
            /* top: 10%;
            left: 10%; */
            /* background-position: 10% 20%;
            background-size: 300%; */
            
            > div{
                position: fixed;
                bottom: 3vh;
                height: 5vh;
                width: 5vh;
                border-radius: 50%;
                font-size: 2rem;
                font-weight: bold;
                display: grid;
                place-items: center;
                color: white;
                transition: .3s;
                cursor: pointer;
            }
        
            .question{
                right: 3vh;
                background-color: crimson;
                
                &:hover{
                    transform: scale(1.1) rotate(-15deg);
                }
            }
            
            .new{
                left: 3vh;
                background-color: rgb(60, 220, 20);
                
                &:hover{
                    transform: scale(1.1) rotate(15deg);
                }
            }
        }
    }    
`;