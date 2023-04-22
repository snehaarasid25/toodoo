import React, { useState,useEffect } from "react";
import Task from "./task";
const Home = () => {
  const iniArr=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

  const [tasks, setTasks] = useState(iniArr); //array initialised empty
   const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const funsubm = (e) => {
    e.preventDefault(); //to prevent the r=normal reload of the site
    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  };
  const deleteTask=(index)=>{
     const newArr=tasks.filter((val,ind)=>{
      return ind!==index;
     })
     setTasks(newArr);
  }
  //jbjb tasks add delete honge tbtb localstorage me chng hote rhega
useEffect(() => {
 localStorage.setItem("tasks",JSON.stringify(tasks));
}, [tasks])

  return (
    <div className="container ">
      <h1>TODO-LIST</h1>
      <form onSubmit={funsubm}>
        <input
          type="text"
          placeholder="Enter title"
          vlaue={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter description"
          vlaue={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
      </form>
      {tasks.map((item, index) => (
        <Task 
        key={index} 
        title={item.title} 
        description={item.description}
        deleteTask={deleteTask}
        index={index}
        />
      ))}
    </div>
  );
};

export default Home;
