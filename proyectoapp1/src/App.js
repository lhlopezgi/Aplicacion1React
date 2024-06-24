import logo from './logo.svg';
import './App.css';

const user = {

  name: 'Hedy Lamarr',
  imageUrl: 'https://www.cumlingus.com/wp-content/uploads/2023/08/s-l1600.jpg',
  imageSize: 90,
  
  };

function App() {
  return (
  <>
    <h1>{user.name}</h1>
    <img
    className="avatar"
    src={user.imageUrl}
    alt={'Foto de ' + user.name}
    style={{
    width: user.imageSize + 250,
    height: user.imageSize + 250
    
    }}
    
    />
    
    </>
  );
}

export default App;
