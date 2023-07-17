import './App.css';
import StyledComponent from './components/StyledComponent/StyledComponent';
import BSComponent from './components/BSComponent/BSComponent';
import { Link } from 'react-router-dom';

const withColorHOC = function(Element){
  return function({color, ...otherProps}){
    console.log(otherProps)
    return <Element {...otherProps} style={{backgroundColor: color}}/>
  }
}

const Button = props => {
  return <button {...props}/>
}

const ColoredButton = withColorHOC(Button);

const titleStyleInline = {
  color: 'blue',
  backgroundColor: 'purple',
  fontSize: '25px'
}

function App() {
  return (
    <div>
      <p style={titleStyleInline}>HOC</p>
      <ColoredButton color="red">
        Crveni
      </ColoredButton>
        <ColoredButton color="yellow">
        Zuti
      </ColoredButton>
        <ColoredButton color="green">
        Zeleni
      </ColoredButton>
      <StyledComponent/>
      <BSComponent/>
      <p>Pages:</p>
      <Link to="/users">Users</Link>
      <br/>
      <Link to="/teletabisi">Teletabisi</Link>
    </div>
  );
}

export default App;
