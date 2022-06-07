import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import React from "react";
import Filters from "./components/Filters";

function App() {
  const [data, setData] = useState([]);
  const [comp, setComp] = useState([]);

  const [page, setPage] = useState(1);
  const [count, setCount] = useState();

  React.useEffect(() => {
    axios.get(`http://localhost:4000/data?_page=${page}&_limit=5`).then((d) => {
      setData(d.data);
      setComp(d.data);
      setCount(d.headers["x-total-count"]);
    });
  }, [page, count]);

  const addDataHandler = (e) => {
    axios.post(`http://localhost:4000/data`, { ...e }).then((d) => {
      console.log(d);

      setCount(d.headers["x-total-count"]);
    });
  };
  const filterHandler = (e) => {
    const newItems = data.filter((item) => {
      return item.department === e;
    });

    setComp(newItems);
  };

  const sortHandler = (e) => {
    if (e === "LH") {
      const newItems = comp.sort((a, b) => {
        return Number(a.salary) - Number(b.salary);
      });
      setComp([...newItems]);
    } else {
      const newItems = comp.sort((a, b) => {
        return Number(b.salary) - Number(a.salary);
      });
      setComp([...newItems]);
    }
  };

  const deleteHandler = (e) => {
    axios
      .delete(`http://localhost:4000/data/${e}`)
      .then(() => {})
      .then(() => {
        axios
          .get(`http://localhost:4000/data?_page=${page}&_limit=5`)
          .then((d) => {
            setData(d.data);
            setComp(d.data);
            setCount(d.headers["x-total-count"]);
          });
      });
  };

  return (
    <div className="App">
      <NewTask addData={addDataHandler} />
      <Filters filterHandler={filterHandler} sortHandler={sortHandler} />
      <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
        prev
      </button>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={count <= page * 5}
      >
        next
      </button>

      <Tasks data={comp} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
