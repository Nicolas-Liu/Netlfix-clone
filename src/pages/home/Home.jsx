import "./home.scss";
import Navbar from "../../components/Navbar";
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';

const home = ({type}) => {
  return <>
  <div className="home">
    <Navbar/>
    <Featured type={type}/>
    <List/>
    <List/>
    <List/>
    <List/>
  </div>
  </>
}

export default home
