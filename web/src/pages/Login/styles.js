import styled from "styled-components";


export const Container = styled.div`
  width:100vw;
  max-width:1320px;
  height: 100vh;
  margin: 0 auto;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const ImageCropped = styled.div`
    width:100%;
    max-width:900px;
    min-width:100px;
    height:90%;
    max-height :800px;
    overflow: hidden;

    border:1px solid var(--white);
    border-right:0px;
    > img {
        width:1200px;
        margin-right: 130px;
    }
`

export const Form = styled.form`
    width:100%;
    max-width:500px;
    height:800px;
    border-left:0px;
    border:1px solid var(--white);
    border-radius:0px 10px 10px 0px;
    background-color:var(--primary);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

`
export const Titulo = styled.h1`
    color: var(--red);
    font-size:45px;
    letter-spacing:5px;
    margin-bottom:5px;
    text-shadow:0px 0px 5px var(--white);

    cursor:default;
    transition:0.8s;

    :hover{
        color: var(--primary);
    }

`
export const Subtitulo = styled(Titulo)`
    margin-bottom:20px;
    font-size:20px;
    color:var(--white);
    text-shadow: none;
    :hover{
        color:var(--red);
    }
`

export const InputGroup = styled.div`
    width:100%;
    margin-top:20px;
    display:flex;
    align-items:center;
    >label{
        margin:0px 10px;
        min-width:65px;
    }
    >input{
        flex:1;
        margin-right:10px;
    }
`
export const Button = styled.button`
    min-width:300px;
    margin:15px 10px 0px 0px;
    align-self:flex-end;
`