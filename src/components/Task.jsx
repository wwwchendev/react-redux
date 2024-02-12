import React, { useEffect, useState } from 'react'
import { loadTasks, deleteTask } from '@/store/tasks'
import { useDispatch, useSelector } from 'react-redux'

const Task = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector(state => state.tasks);
  // console.log(useSelector(state => state.tasks));

  useEffect(() => {
    dispatch(loadTasks())
  }, [])

  const removeTask = (task) => {
    dispatch(deleteTask({ id: task.id }))
  }

  return (
    <div>
      {loading && <p>載入中...</p>}
      {tasks.map((task, idx) => {
        return <div key={task.id} style={{ display: 'flex' }}>
          <p >{task.task}</p>
          <button onClick={() => { removeTask(task) }}>X</button>
        </div>
      })}
    </div>
  )
}

export default Task