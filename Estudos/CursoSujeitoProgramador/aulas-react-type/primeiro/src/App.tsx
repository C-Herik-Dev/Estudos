import { useState } from 'react'

export default function App() {
  const [signed, setSigned] = useState(false)

  return (
    <div>
      <button onClick={() => setSigned(true)}>Entrar</button>

      {signed && (
        <div>
          <h1>Bem-vindo ao sistema!</h1>
          <button onClick={() => setSigned(false)}>Sair</button>
        </div>
      )}
    </div>
  )
}