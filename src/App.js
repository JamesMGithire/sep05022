import './App.css';
import Body from './Body';
import Header from './Header';
/*
spreap in prop
{...obj} >> better than >> object = {obj}


if(props.openSpots === 0){
  badgeText = "SOLD OUT"
}else if(props.location === "Online"){
  badgeText = "ONLINE"
}
*/
// {badgeText && <div>{badgeText}</div>}


function App() {
  return (
    <div className="App">
      <div className='width400px marginA br15 pad9'>
        <Header />
        <Body/>
      </div>
    </div>
  );
}

export default App;
