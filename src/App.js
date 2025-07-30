import "./App.css";
import { useTheme } from "./Component/ThemeContext";
import UserCard from "./Component/UserCard";
import { useEffect, useState } from "react";

function App() {
  const [dummyData, setDummyData] = useState([]);
  const { theme, toggleTheme } = useTheme();

  const deleteUser = (id) => {
    const updateData = dummyData.filter((item) => {
      return item.id != id;
    });
    setDummyData(updateData);
  };
  useEffect(() => {
    setDummyData(dummyUser);
  }, []);

  const dummyUser = [
    {
      id: 1,
      name: "Leanne Graham",
      mail: "Sincere@april.biz",
      phone: "+91 98765 43210",
    },
    {
      id: 2,
      name: "Ervin Howell",
      mail: "Shanna@melissa.tv",
      phone: "+91 91234 56789",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      mail: "Nathan@yesenia.net",
      phone: "+91 99888 11223",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      mail: "Julianne.OConner@kory.org",
      phone: "+91 90123 45678",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      mail: "Lucio_Hettinger@annie.ca",
      phone: "+91 98222 33445",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      mail: "Karley_Dach@jasper.info",
      phone: "+91 88990 77885",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      mail: "Telly.Hoeger@billy.biz",
      phone: "+91 90000 11122",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      mail: "Sherwood@rosamond.me",
      phone: "+91 98181 72637",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      mail: "Chaim_McDermott@dana.io",
      phone: "+91 99777 12345",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      mail: "Rey.Padberg@karina.biz",
      phone: "+91 93333 44455",
    },
  ];

  return (
    <div className="App">
      <div className="card_container">
        <button onClick={toggleTheme} className="toggle_btn">
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        <table className="user_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((item, index) => (
              <UserCard
                key={index}
                data={item}
                handleDelete={(id) => {
                  deleteUser(id);
                }}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
