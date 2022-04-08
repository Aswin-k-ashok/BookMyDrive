import React from 'react'
import styled from 'styled-components'

const LoaderWrapper = styled.div`

width: 60px;
height:60px;


`
const MainLoader = styled.div`
    box-sizing:border-box;
    width:100%;
    height:100%;
    border:10px solid #43C6AC;
    border-top-color: #E83845;
    border-top-color: #F8FFAE;
    border-radius:50%;
    animation: rotate 5s linear infinite;

`



const LoaderInner = styled.div`
    border-top-color: #746AB0;
    border-bottom-color:#288BA8;
    animation-duration:2.5s;

    @keyframes rotate{
        0%{
            transform: scale(1) rotate(360deg);
        }
        50%{
            transform:scale(.8) rotate(-350deg);
        }
        100%{
            transform: scale(1) rotate(360deg);
        }
    }
`


// .btn-grad {background-image: linear-gradient(to right, # 0%, #F4D03F  51%, #16A085  100%)}
// .btn-grad {
//    margin: 10px;
//    padding: 15px 45px;
//    text-align: center;
//    text-transform: uppercase;
//    transition: 0.5s;
//    background-size: 200% auto;
//    color: white;            
//    box-shadow: 0 0 20px #eee;
//    border-radius: 10px;
//    display: block;
//  }

//  .btn-grad:hover {
//    background-position: right center; /* change the direction of the change here */
//    color: #fff;
//    text-decoration: none;
//  }


function Loader() {
    return (
        <LoaderWrapper>
            <MainLoader>
                <LoaderInner>

                </LoaderInner>
                <LoaderInner>
                </LoaderInner>
            </MainLoader>
        </LoaderWrapper>
    )
}

export default Loader