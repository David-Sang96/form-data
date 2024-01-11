import { useState } from "react";

function App() {
  const defaultValue = {
    name: "",
    email: "",
    message: "",
    language: "",
    checked: false,
  };

  const [data, setData] = useState(defaultValue);
  const [user, setUser] = useState([]);
  const languages = [
    "select programming language",
    "Java",
    "PHP",
    "Javascript",
    "Python",
    "C++",
    "C#",
  ];

  const handleSubmit = () => {
    if (data.name === "") {
      return;
    }
    setUser((prev) => [...prev, data]);
    setData(defaultValue);
  };

  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <input
              value={data.name || ""}
              type="text"
              className="userName"
              placeholder="Enter your name..."
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              value={data.email || ""}
              type="email"
              className="userEmail"
              placeholder="Enter your email..."
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="form-group">
            <textarea
              value={data.message || ""}
              className="userMessage"
              cols="30"
              rows="10"
              placeholder="Enter your message..."
              onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group">
            <select
              value={data.language || ""}
              className="userOption"
              onChange={(e) => setData({ ...data, language: e.target.value })}
            >
              {languages.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              className="userCheckBox"
              checked={data.checked || ""}
              onChange={(e) => setData({ ...data, checked: e.target.checked })}
            />
            I accept all terms
          </div>
          <div className="form-group">
            <button className="contact" type="button" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </form>
      </div>
      {user &&
        user.map((item) => (
          <div className="userInfo" key={item.name}>
            <div>{`Your name is ${item.name}`}</div>
            <div>{`Your email is ${item.email}`}</div>
            <div>{`Your selected programming language is ${item.language}`}</div>
            <div>{item.message}</div>
          </div>
        ))}
    </div>
  );
}

export default App;
