import React, { useState, useEffect } from "react";
import Lists from "../../Container/List/List";
import styles from "./Tasks.module.css";
import ShowDetail from "../../Container/showDetail/showDetail";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../UI/Spinner/Spinner";
import Modal from "../UI/Modal/Modal";
import AddTask from "./addTask/addTask";

export default function Tasks() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [backlog, setbacklog] = useState([]);
  const [show, setShow] = useState(false);
  const [isTodo, setTodo] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTask();
    fetchBacklog();
  }, [id]);

  async function fetchTask() {
    const taskPromise = await axios.get(
      `http://localhost:3300/getTasks/${id}`,
      {
        withCredentials: true,
      }
    );
    setLoading(false);
    setData(taskPromise.data);
  }

  async function fetchBacklog() {
    const backlogPromise = await axios.get(
      `http://localhost:3300/getBackLogs/${id}`,
      {
        withCredentials: true,
      }
    );
    setLoading(false);
    setbacklog(backlogPromise.data);
  }

  const modalHandler = () => {
    setShow(!show);
  };

  const isAddingTodo = () => {
    setTodo(true);
    modalHandler();
  };

  const isAddingBacklog = () => {
    setTodo(false);
    modalHandler();
  };

  return (
    <React.Fragment>
      <Modal show={show} handler={modalHandler}>
        <AddTask handler={modalHandler} todo={isTodo} />
      </Modal>

      <div className="container flex flex-row mt-3">
        <div className="w-5/12 flex-col">
          <div className="w-11/12 p-4 rounded-2xl m-auto bg-white mb-3">
            <div className="mb-3 flex flex-row justify-between items-center">
              <h1 className="text-2xl font-bold">Backlog</h1>
              <button
                onClick={isAddingBacklog}
                style={{ background: "#CEF9C6" }}
                className="p-3 text-black font-extrabold rounded-3xl text-xs"
              >
                + Add Task
              </button>
            </div>
            <div
              className={[
                "max-h-96 min-h-[17rem] overflow-y-scroll",
                styles.List,
              ].join(" ")}
            >
              {loading ? (
                <Spinner />
              ) : data.length <= 0 ? (
                <Lists title={"Nothing to show!"} tag={null} />
              ) : (
                <div
                  className={[
                    "max-h-96 min-h-[17rem] overflow-y-scroll",
                    styles.List,
                  ].join(" ")}
                >
                  {backlog.map((item, id) => {
                    return (
                      <Lists {...item} link={`backlog/${item._id}`} key={id} />
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="w-11/12 p-4 rounded-2xl m-auto bg-white mb-3">
            <div className="mb-3 flex flex-row justify-between items-center">
              <h1 className="text-xl font-bold">TODO</h1>
              <button
                onClick={isAddingTodo}
                style={{ background: "#CEF9C6" }}
                className="p-3 text-black font-extrabold rounded-3xl text-xs"
              >
                + Add Task
              </button>
            </div>
            {loading ? (
              <Spinner />
            ) : data.length <= 0 ? (
              <Lists title={"Nothing to show!"} link={null} />
            ) : (
              <div
                className={[
                  "max-h-96 min-h-[17rem] overflow-y-scroll",
                  styles.List,
                ].join(" ")}
              >
                {data.map((item, id) => {
                  return <Lists {...item} link={`todo/${item._id}`} key={id} />;
                })}
              </div>
            )}
          </div>
        </div>

        <div className="w-3/5">
          <ShowDetail />
        </div>
      </div>
    </React.Fragment>
  );
}
