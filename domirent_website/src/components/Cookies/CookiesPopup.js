import React, { useState } from 'react';
import styled from "styled-components";

import { cookiesContent } from "../../data/info/cookies-content";
import { device } from "../../assets/styles/devices";

const CookiesBar = styled.div`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

    z-index: 1;
    opacity: 0.98;

    font-family: raleway, sans-serif;
`

const CookiesContent = styled.div`
    background-color: #2C2E43;

    @media only screen and ${device.mobileS} {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 8px;
    }

    @media only screen and ${device.mobileM} {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 10px;
    }

    @media only screen and ${device.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 12px;
    }

    @media only screen and ${device.laptop} {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 14px;
    }

    @media only screen and ${device.laptopL} {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 14px;
    }

    @media only screen and ${device.desktop} {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 14px;
    }
    
    span {
        display: flex;
        width: 100%;
       
        font-size: 1rem;
        text-align: center;
        color: #FFD523;
        
        padding: 14px;

        @media only screen and ${device.mobileS} {
            font-size: 12px;
            
        }

        @media only screen and ${device.mobileM} {
            font-size: 14px;

        }

        @media only screen and ${device.tablet} {
            font-size: 16px;

        }

        @media only screen and ${device.laptop} {
            font-size: 18px;

        }

        @media only screen and ${device.laptopL} {
            font-size: 18px;

        }

        @media only screen and ${device.desktop} {
            font-size: 18px;

        }

    }
`

const CookiesButtons = styled.div`
    display: flex;
    justify-content: center;

    font-size: 0.8rem;
    padding: 0 0 14px 0;

    @media only screen and ${device.mobileS} {
        font-size: 12px;
        padding: 0;
        
    }

    @media only screen and ${device.mobileS} {
        font-size: 14px;
        padding: 0;

    }

    @media only screen and ${device.tablet} {
        font-size: 16px;
        padding: 0;

    }

    @media only screen and ${device.laptop} {
        font-size: 1rem;
        padding: 0;

    }

    @media only screen and ${device.laptopL} {
        font-size: 1rem;
        padding: 0;

    }

    @media only screen and ${device.desktop} {
        font-size: 1rem;
        padding: 0;

    }
    
`

const CookiesAcceptBtn = styled.button`

    width: 124px;
    height: 44px;
    
    border-radius: 15px;
    border: 2px solid #FFD523;;
    background-color: #2C2E43;;
    color:  #FFD523;

    margin-right: 4px;

    cursor: pointer;
    transition: all 0.3s linear;

    @media only screen and ${device.mobileS} {
        width: 110px;
        height: 40px;

    }

    @media only screen and ${device.mobileM} {
        width: 110px;
        height: 40px;

    }

    @media only screen and ${device.tablet} {
        width: 110px;
        height: 40px;

    }
    @media only screen and ${device.laptop} {
        width: 120px;
        height: 40px;

    }

    @media only screen and ${device.laptopL} {
        width: 120px;
        height: 40px;

    }

    @media only screen and ${device.desktop} {
        width: 120px;
        height: 40px;

    }
    
    &:hover {
        font-weight: bold;
        background-color: #FFD523;
        color: #2C2E43;
        font-size: 0.9rem;

        @media only screen and ${device.mobileS} {
            font-weight: normal;
            background-color: #2C2E43;
            color: #FFD523;
            font-size: 12px;
        }

        @media only screen and ${device.mobileM} {
            font-weight: normal;
            background-color: #2C2E43;
            color: #FFD523;
            font-size: 12px;
        }

        @media only screen and ${device.tablet} {
            font-weight: normal;
            background-color: #2C2E43;
            color: #FFD523;
            font-size: 16px;
        }

        @media only screen and ${device.laptop} {
            font-weight: bold;
            background-color: #FFD523;
            color: #2C2E43;
            font-size: 1.1rem;
        }

        @media only screen and ${device.laptopL} {
            font-weight: bold;
            background-color: #FFD523;
            color: #2C2E43;
            font-size: 1.1rem;
        }

        @media only screen and ${device.desktop} {
            font-weight: bold;
            background-color: #FFD523;
            color: #2C2E43;
            font-size: 1.1rem;
        }
    }
`

const CookiesRejectBtn = styled.a`
    text-decoration: none;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 120px;
    height: 40px;
    margin-left: 4px;

    border-radius: 15px;
    border: 2px solid #FFD523;;
    background-color: #2C2E43;;
    color:  #FFD523;
    
    transition: all 0.3s linear;

    @media only screen and ${device.mobileS} {
        width: 106px;
        height: 36px;

    }

    @media only screen and ${device.mobileM} {
        width: 106px;
        height: 36px;

    }

    @media only screen and ${device.tablet} {
        width: 106px;
        height: 36px;

    }

    @media only screen and ${device.laptop} {
        width: 120px;
        height: 36px;

    }

    @media only screen and ${device.laptopL} {
        width: 120px;
        height: 36px;

    }

    @media only screen and ${device.desktop} {
        width: 120px;
        height: 36px;

    }

    &:hover {
        font-weight: bold;
        background-color: #FFD523;
        color: #2C2E43;
        font-size: 0.9rem;

        @media only screen and ${device.mobileS} {
            font-weight: normal;
            background-color: #2C2E43;
            color: #FFD523;
            font-size: 12px;
        }

        @media only screen and ${device.mobileM} {
            font-weight: normal;
            background-color: #2C2E43;
            color: #FFD523;
            font-size: 12px;
        }

        @media only screen and ${device.tablet} {
            font-weight: normal;
            background-color: #2C2E43;
            color: #FFD523;
            font-size: 16px;
        }

        @media only screen and ${device.laptop} {
            font-weight: bold;
            background-color: #FFD523;
            color: #2C2E43;
            font-size: 1.1rem;
        }

        @media only screen and ${device.laptopL} {
            font-weight: bold;
            background-color: #FFD523;
            color: #2C2E43;
            font-size: 1.1rem;
        }

        @media only screen and ${device.desktop} {
            font-weight: bold;
            background-color: #FFD523;
            color: #2C2E43;
            font-size: 1.1rem;
        }

    }
`


const Cookies = () => {

    const [open, setOpen] = useState(true);


    const closeCookies = () => {
        setOpen(!open);
    }

    return (
        <>
            {open && <CookiesBar className='cookies'>
                <CookiesContent className='cookies-content'>
                    <span className='cookies-text'>{cookiesContent}</span>
                    <CookiesButtons className='cookies-buttons'>
                        <CookiesAcceptBtn className='cookies-btn1' type='button' onClick={closeCookies}>Akceptuję</CookiesAcceptBtn>
                        <CookiesRejectBtn
                            href='https://www.google.pl/'
                            className='cookies-btn2'
                            rel='noopener noreferrer'>
                            Wychodzę
                        </CookiesRejectBtn>
                    </CookiesButtons>
                </CookiesContent>
            </CookiesBar>}
        </>
    )
}


export default Cookies;