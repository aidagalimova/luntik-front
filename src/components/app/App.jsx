import Routing from '../../pages/routing';
import 'antd/dist/antd.css';
import './App.scss';
import 'antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

  const currentUser = useSelector(state => state.user.currentUser)
  const isAuth = useSelector(state => state.user.isAuth)
  console.log(currentUser)
  console.log(isAuth)
  return (
    <div className="app">
      <Routing />
    </div>
  )
}

export default App;
