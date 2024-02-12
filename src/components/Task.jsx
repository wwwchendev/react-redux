import React, { useEffect, useState } from 'react'
import { loadTasks, deleteTask, updateCompleted } from '@/store/tasks'
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
  const toggleCompleted = (task) => {
    dispatch(updateCompleted({
      id: task.id,
      completed: !task.completed
    }))
  }

  return (
    <div>
      {loading && <p>載入中...</p>}
      {tasks.map((task, idx) => {
        return <div key={task.id} style={{ display: 'flex' }}>
          <p
            onClick={() => { toggleCompleted(task) }}
            style={{ textDecoration: `${task.completed ? 'line-through' : ''}` }}
          >
            {task.task}
          </p>
          <button onClick={() => { removeTask(task) }}>X</button>
        </div>
      })}
    </div >
  )
}

export default Task