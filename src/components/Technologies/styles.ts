import styled from "styled-components";

export const Container = styled.section`
    padding-inline: 5%;
    
    margin-bottom: 3rem;
    
    h2 {
        font-size: 4.2rem;
        line-height: 38px;
        
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
            }
            
            hr {
                border: var(--c-green) 1px solid;
                line-height: 28px;
            }
            
            p {
                font-weight: 400;
                text-align: justify;
                font-size: 1.6rem;
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
