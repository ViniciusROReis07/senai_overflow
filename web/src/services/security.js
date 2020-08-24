const CHAVE_ALUNO = "@aluno";

export const signin = (aluno) => {
    localStorage.setItem( CHAVE_ALUNO,JSON.stringify(aluno) );
}
export const signOut = () => {
    localStorage.clear();
}

export const isSignedIn = () => {
     const aluno = JSON.parse( localStorage.getItem(CHAVE_ALUNO) );
    //  Verificação do Token
     return aluno ? true : false;
}