
import { Link } from 'react-router-dom'
import illustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button'

import '../styles/auth.scss';

import { useAuth } from '../hooks/useAuth';




export function NewRoom() {

 const {user} = useAuth();

  return (
    <div id="page-auth">
      <aside>
        <img src={illustration} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo-real</p>
      </aside>
      <main>
       
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h1>{user?.name}</h1>
          <h2>Criar uma  nova sala</h2>

          <form action="">
            <input type="text"
              placeholder="Nome sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui!!</Link></p>
        </div>
      </main>

    </div>
  )
}