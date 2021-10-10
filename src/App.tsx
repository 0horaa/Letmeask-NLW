import {BrowserRouter, Route, Switch} from "react-router-dom";
//o componente de Switch impede que 2 rotas sejam mostradas ao mesmo tempo 

import {Home} from "./pages/Home";
import {NewRoom} from "./pages/NewRoom";
import {Room} from "./pages/Room";
import {AdminRoom} from "./pages/AdminRoom";

import {AuthContextProvider} from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact={true /*só é exibida se o path for exatamente a "/"*/} component={Home}/>
          <Route path="/rooms/new" component={NewRoom}/>
          <Route path="/rooms/:id" component={Room}/>
          <Route path="/admin/rooms/:id" component={AdminRoom}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
//acima, o path como / basicamente indica a primeira página e a que será exibida primeiro
//o :id significa que quando ele acessar rooms/qualquer_coisa, ele vai mostrar aquela rota

export default App;
