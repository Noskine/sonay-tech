import styled from "styled-components";

export const Container = styled.section`
    main {
        min-height: 94vh;
    }
    
    #waysMain {
        height: 90vh;
        padding-inline: 5%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        .profile {
            width: 60%;
            display: flex;
            align-items: center;
            gap: 16px;
            
            >  img {
                width: 300px;
                border-radius: 50%;
                box-shadow: var(--shadow);
                transition: 300ms all;
                
                &:hover {
                    transform: scale(1.08);
                }
            }
            
            div {
                text-shadow: var(--shadow);
                > h2 {
                    font-size: 3.8rem;
                }
                
                > p {
                    text-align: justify;
                }
            }
        }
        
        nav ul {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
            padding: 0px;
            
            li button {
                width: 300px;
            }
        }
    }
    
    .button-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--c-green);
        gap: 5px;
        transition: 300ms all;
        font-size: 1.4rem;
        font-weight: 500;
        
        &:hover {
            background-color: var(--c-background-buttons);
            transform: scale(1.07);
        }
    }
    
    @media (max-width: 1100px) {
        #waysMain {
            height: 100vh;
            padding-top: 10%;
            flex-direction: column;
            .profile {
                width: 100%;
            }
            
            nav ul li button {
                width: 500px;
            }
        }
    }

    @media (max-width: 720px) {
        padding-top: 50px;
        
        #waysMain {
            flex-direction: column;
            .profile {
                width: 90%;
                flex-direction: column;
                text-align: center;
                
                h3 {
                    line-height: 28px;
                }
                
                img:hover {
                    transform: none;
                }
            }

            nav ul li button {
                width: 70vw;
            }
        }
    }
`