import { React, useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [getdata, setgetdata] = useState([]);
  const [getform, setform] = useState({});

  const getformdata = async (e) => {
    setform({
      ...getform,
      [e.target.name]: e.target.value,
    });
  };
  const getfun = async () => {
    const response = await Axios.get("http://localhost:5005/second");
    setgetdata(response.data);
    console.log(response.data);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(getform);
    Axios.post("http://localhost:5005/checker", getform)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getfun();
    // handlesubmit();
  }, []);

  return (
    <>
      <div className="container my-5">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={getformdata}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              onChange={getformdata}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div>
        {getdata.map((item) => (
          <div key={item._id}>
            <p>Username: {item.username}</p>
            <p>Password: {item.password}</p>
            <p>id: {item._id}</p>
            {/* Add other properties of the data item as needed */}
          </div>
        ))}
      </div>
      {/* {getdata.data} */}
    </>
  );
}

export default App;
