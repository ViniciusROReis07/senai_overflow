import React from "react";


import {Container,ImageCropped,Form,Titulo,Subtitulo,InputGroup,Button} from "./styles";

import foto from "../../assets/foto.jpg";

const Login = () => {
    return(
        <>
            <Container>
                <ImageCropped>
                    <img src={foto} alt="Imagem de capa"></img>
                </ImageCropped>
                <Form>
                    <Titulo>
                        SENAI-OVERFLOW
                    </Titulo>
                    <Subtitulo>
                        Compartilhe suas duvidas
                    </Subtitulo>
                    <InputGroup>
                        <label>e-mail</label>
                        <input type="email" placeholder="Insira seu email" />
                    </InputGroup>
                    <InputGroup>
                        <label>Senha</label>
                        <input type="password" placeholder="Insira sua senha" />
                    </InputGroup>
                    <Button>
                        Entrar
                    </Button>
                    <Button>
                        Registrar-se
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Login;