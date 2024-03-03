import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    padding-inline: 5%;
    margin-block: 5rem;
    
    &::before {
        position: absolute;
        filter: blur(80px);
        border-radius: 50%;
        content: '';
        height: 250px;
        width: 250px;
        background-color: #2ea77020;
        z-index: -1;
        top: -100px;
        left: -50px;
    }
    
    h2 {
        font-size: 3.2rem;
        line-height: 3.2rem;
        text-shadow: var(--shadow);
        
        &::after {
            content: "  .";
            color: var(--c-green);
        }
    }

    #sectionTechnologies {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 0.8fr;
        gap: 5rem;

        .description-technologies {
            h3 {
                font-size: 3.2rem;
                font-weight: 700;
                text-transform: capitalize;
                text-shadow: var(--shadow);
            }
            
            hr {
                border: var(--c-green) 1px solid;
                line-height: 28px;
                text-shadow: var(--shadow);
            }
            
            p {
                font-weight: 400;
                text-align: justify;
                font-size: 1.6rem;
                text-shadow: var(--shadow);
            }
        }

        .tecnologies-containers {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(100px, 2fr));
            gap: 10px;

          
            div {
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 5px;

                font-size: 4.5rem;
                background-color: var(--c-black-600);
                box-shadow: var(--shadow);
                border: 1px solid var(--c-black-600);
                border-radius: 5px;
                transition: 300ms;
                cursor: pointer;
                
                
                &:hover {
                    transition: 300ms;
                    color: var(--c-background-buttons);
                    border: 1px solid var(--c-background-buttons);
                    transform: scale(1.08);
                }
            }
        }
    }
    
    @media screen and (max-width: 830px) {
        
        #sectionTechnologies {
            grid-template-columns: 1fr;
        }
        
        .description-technologies {
            display: none;
        }

        .tecnologies-containers {
            width: 100%;
        }
    }
`;
