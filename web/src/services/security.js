import { api } from "./api";

const CHAVE_ALUNO = "@aluno";

export const signin = (aluno) => {
  localStorage.setItem(CHAVE_ALUNO, JSON.stringify(aluno));

  api.defaults.headers.common['Authorization'] = `bearer ${aluno.token}`;
};
export const signOut = () => {
  localStorage.clear();
  api.defaults.headers.common['Authorization'] = undefined;
};

export const getAluno = () => {
  const { aluno } = JSON.parse(localStorage.getItem(CHAVE_ALUNO));
  return aluno;
};

export const isSignedIn = () => {
  const aluno = JSON.parse(localStorage.getItem(CHAVE_ALUNO));
  //  Verificação do Token
  if(aluno){
    api.defaults.headers.common['Authorization'] = `bearer ${aluno.token}`;
  
  }
  return aluno ? true : false;
};
