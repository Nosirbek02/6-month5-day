import React from "react";
import { request } from "../../config/request";
import { Form } from "../form/form";

export const Card = (id) => {
  const [state, setState] = React.useState([]);

  const getData = () => {
    request.get("/posts").then((res) => {
      setState(res.data);
    });
  }

  React.useEffect(() => {
    getData()
  }, []);

  const del = (i) => {
    request
      .delete(`/posts/${i}`)
      .then((res) => {
        getData()
      })
      .catch((error) => {
        console.log(error);
    });
  };

  const edit=()=>{
    
  }

  return (
    <>
      <div>
        <Form />
        {state.map((item) => (
          <div key={item.id}>
            <li>{item.title}</li>
            <button onClick={() => del(item.id)}  key={item.id}>
              Delete
            </button>
            <button onClick={() => edit(item.id)}  key={item.id} >Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};
