import styled from "styled-components";

export const BoxStyle = styled.div`
    height: auto;
    width: 60vw;
    padding: 1rem;

    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    @media (max-width: 786px) {
            margin-top: 20rem;
            width: 100vw;
            /* margin */
            /* margin-bottom: 20rem; */
        }

        #btn-wrap {
            margin-bottom: 1rem;
        }

    label {
        font-size:12px;
        margin-left: 5px;
        color: #8ba79f;
        opacity: .9;
    }

    form[id="form1"]{
        width: 100%;
        
        /* color: #e3e3e3; */
        margin-top: 5px;
        margin-bottom: 2rem;
        cursor: pointer;
        position: relative;
        @media (max-width: 786px) {
            width: 200%;
        }
        span{
        position: absolute;
        color: grey;
        top: 1.8rem;
        left: 10px;
    }

        input[id="firstInput"  ] {
        color: #00484C;
        font-weight:700;
        font-size: 14px;
        text-align: right;
        padding: 10px 20px;
        border: 1px solid #95EEE4;
        border-radius:5px;
        width: 100%;
        background: #f5f2f2;
        cursor: pointer;
        @media (max-width: 786px) {
            /* width: ; */
            /* background: red; */
        }      

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
            display: none;
        }

        &:focus {
            outline: #95EEE4;
        }
      
    }
     }

     form[id="form2"]{
        position: relative;
        span {
            position: absolute;
            color: grey;
            top: 1.5rem;
            left: .5rem;
            z-index: 9;
            font-size: 20px;
        }
        input[name=people ]{
        margin: 1rem 0;
        /* border-radius: 5px;
        padding: .5rem 0; */
        color: #00484C;
        font-weight:700;
        font-size: 14px;
        text-align: right;
        padding: 10px 30px;
        border: 1px solid #E3AE9F;
        border-radius:5px;
        width: 100%;
        background: #f5f2f2;
        position: relative;
        cursor: pointer;
        @media (max-width: 786px) {
            width: 200%;
        }
        span {
            position: absolute;
            background: red;
            top: 50;
        }
      

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
            display: none;
        }

        &:focus {
            outline: #E3AE9F;
        }
      

    }
    
    }


   

   

    button[data="state"] {
        background: blue;

        &:active {
            background: green;
        }
    }

   
`

export const FormInputs = styled.div`
display: flex;
flex-direction: column;
 width: 48%;
 flex: 0 0 1;
 input[id="percentageInput"  ] {
        width: 5rem;
        height: 2.2rem;
        font-weight: 700;gap: 1;
        color: #00484C;
        margin-left: .8rem;
        margin-top: .8rem;
        border-radius: 5px;
        outline: none;
        border: 2px solid #95EEE4;
        cursor: pointer;
        text-align: right;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button{
            display: none;
        }
    }

  
`

export const GreenBox = styled.div`
    background: #00484c;
    color: #fff;
    padding: 2rem;
    margin-left: 2px;
    width: 50%;
    border-radius:10px;
    p{
        font-size:14px;
    }
    span {
        font-size:10px;
        opacity: .5;
    }
    @media (max-width: 786px) {
        width: 100%;
    } 
    

`

export const ButtonStyle = styled.button`
    background: #00484c;
    margin: 4px;
    padding: 10px;
    width: 6rem;
    border-radius: 5px;
    font-weight:700;
    border: none;
    cursor: pointer;
    color: #fff;
    
    text-align: center;
    @media (max-width: 786px) {
        
        }  

    &:hover {
        background: #95EEE4;
        color: #00484c;
    }
`

export const ResetBtn = styled.button`
background: #00ccad;
padding: 10px;
width: 100%;
border: none;
border-radius: 5px;
margin-top: 4rem;
font-weight: 700;
font-size: 15px;
&:hover {
    background: #95efe0;
}

align-items: center;
`