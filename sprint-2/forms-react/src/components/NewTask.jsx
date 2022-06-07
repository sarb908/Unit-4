import React, { useState } from "react";

const NewTask = (props) => {
  const [data, setdata] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    martialStatus: "",
    img: "",
  });
  React.useEffect(() => {
    console.log(data);
  }, [data]);
  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(e);
    console.log(name, value);
    if (type === "checkbox") {
      setdata((prev) => ({ ...prev, [name]: value }));
    } else {
      setdata((prev) => ({ ...prev, [name]: value }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addData(data);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input name="name" onChange={changeHandler} />
      </div>
      <div>
        <label>age</label>
        <input name="age" type="number" onChange={changeHandler} />
      </div>
      <div>
        <label>address</label>
        <input name="address" onChange={changeHandler} />
      </div>
      <div>
        <select name="department" onChange={changeHandler}>
          <option value="">Department</option>
          <option value="HR">HR</option>
          <option value="Tech">Tech</option>
          <option value="Operations">Operations</option>
        </select>
      </div>
      <div>
        <label>salary</label>
        <input name="salary" type="number" onChange={changeHandler} />
      </div>
      <div>
        <label>married</label>
        <input
          name="martialStatus"
          type="radio"
          value="married"
          onChange={changeHandler}
        />
        <label>unmarried</label>
        <input
          name="martialStatus"
          type="radio"
          value="unmarried"
          onChange={changeHandler}
        />
      </div>
      <div>
        <label>profile picture</label>
        <input name="img" type="file" onChange={changeHandler} />
      </div>
      <input type="submit" />
    </form>
  );
};

export default NewTask;
