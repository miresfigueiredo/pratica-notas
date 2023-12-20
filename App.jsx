import { useState } from "react"
import Aluno from "./Aluno"

function App() {
  const alunos = ["Alan", "João", "Maria", "Pedro", "Vilma"]

  const [notaPadrao, setNotaPadrao] = useState(0)

  return (
    <div>
      <h1>Lançar Nota</h1>
      <p>Disciplina:
        <input type="text" />
      </p>
      <p>
        <span>Aluno</span>
        <span>Nota</span>
      </p>
      

      {alunos.map((al, index) =>
        <Aluno key={index} nome={al} nota={notaPadrao} />
      )}

      <button onClick={() => setNotaPadrao()}>Limpar</button>
      <button>Salvar</button>
    </div>
      
  )
}

export default App
