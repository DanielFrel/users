import React from 'react';
import './index.css';
import { Success } from './components/Success';
import { Users } from './components/Users';

// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = React.useState([])
  const [invites, setInvites] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  const [sucess, setSucess] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')


  React.useEffect(() => {
    fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
      setUsers(json.data);
    }).catch((err) => {
      console.warn(err);
      alert('Ошибка при получение пользователей')
    }).finally(() => setLoading(false))
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onCklickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id))
    } else {
      setInvites((prev) => [...prev, id])
    }

  }

  const onCklickSendInvites = () => {
    setSucess(true);
  }

  return (
    <div className="App">
      {
        sucess ? (<Success count={invites.length}/>) : 
        (<Users 
          onChangeSearchValue={onChangeSearchValue} 
          searchValue={searchValue} 
          items={users} 
          isLoading={isLoading} 
          invites={invites}
          onCklickInvite={onCklickInvite}
          onCklickSendInvites={onCklickSendInvites}
          />)
      }

      
      {/* <Success /> */}
    </div>
  );
}

export default App;
