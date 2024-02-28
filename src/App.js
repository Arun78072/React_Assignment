import logo from './logo.svg';
import './App.css';
import UserCard from './Component/UserCard';
import { useEffect, useState } from 'react';

function App() {
  const [dummyData , setDummyData] = useState([])
  const deleteUser = (id)=>{
    const updateData = dummyData.filter((item)=>{return(item.id != id)})
    setDummyData(updateData)
  }
  useEffect(()=>{
    setDummyData(dummyUser)
  },[])

  const dummyUser = [
    {
      id:1,
      name:'Leanne Graham',
      mail:'Sincere@april.biz',
      phone:'1-770-736-8031 x56442',
      link:'http://hildegard.org',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
    {
      id:2,
      name:'Ervin Howell',
      mail:'Shanna@melissa.tv',
      phone:'010-692-6593 x09125',
      link:'http://anastasia.net',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
    {
      id:3,
      name:'Clementine Bauch',
      mail:'Nathan@yesenia.net',
      phone:'1-463-123-4447',
      link:'http://ramiro.info',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
    {
      id:4,
      name:'Patricia Lebsack',
      mail:'Julianne.OConner@kory.org',
      phone:'493-170-9623 x156',
      link:'http://kale.biz',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
    {
      id:5,
      name:'Chelsey Dietrich',
      mail:'Lucio_Hettinger@annie.ca',
      phone:'(254)954-1289',
      link:'http://demarco.info',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
    {
      id:6,
      name:'Mrs. Dennis Schulist',
      mail:'Karley_Dach@jasper.info',
      phone:'1-477-935-8478 x6430',
      link:'http://ola.org',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
    {
      id:7,
      name:'Kurtis Weissnat',
      mail:'Telly.Hoeger@billy.biz',
      phone:'210.067.6132',
      link:'http://elvis.io',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
    {
      id:8,
      name:'Nicholas Runolfsdottir V',
      mail:'Sherwood@rosamond.me',
      phone:'586.493.6943 x140',
      link:'http://jacynthe.com',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
    {
      id:8,
      name:'Glenna Reichert',
      mail:'Chaim_McDermott@dana.io',
      phone:'(775)976-6794 x41206',
      link:'http://conrad.com',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
    {
      id:10,
      name:'Clementina DuBuque',
      mail:'Rey.Padberg@karina.biz',
      phone:'024-648-3804',
      link:'http://ambrose.net',
      image:'https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy'
    },
  ]
  return (
    <div className="App">
    <div className='card_container'>
    {dummyData.map((item,index)=><div key={index}><UserCard data={item} handleDelete={(id)=>{deleteUser(id)}} /></div>)}
    </div>
     
    </div>
  );
}

export default App;
