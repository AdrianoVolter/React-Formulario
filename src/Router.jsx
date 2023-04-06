/**
 * Cadastre as rotas da sua aplicação!
 * Lembrando: a estrutura do objeto que configura a rota é a seguinte:
 *
 * {
 *   path: "/caminho-da-rota",
 *   element: <ComponenteDaRota />,
 * }
 */

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dadospessoais from "./components/DadosPessoais";
import Endereco from "./components/Endereco";
import Agradecimento from "./components/Agradecimento";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/dadospessoais",
                element: <Dadospessoais />,
            },
            {
                path: "/endereco",
                element: <Endereco />,
            },
            {
                path: "/agradecimento",
                element: <Agradecimento />,
            },
        ],
    },
]);

        
   
    
    
