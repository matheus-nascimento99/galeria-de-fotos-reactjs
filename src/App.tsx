import { MainRoutes } from "./routes/MainRoutes";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <header>
        <h1 className="text-3xl font-semibold">Galeria de Fotos</h1>
        <hr />
        <button className='p-2 bg-gray-400 my-5 rounded font-semibold hover:text-white' onClick={()=>navigate(-1)}>Voltar</button><br/>
      </header>

      <main>
        <MainRoutes/>
      </main>

      <footer>
        <p>Todos os direitos reservados. &copy;</p>
      </footer>
    </div>
  );
}

export default App;
