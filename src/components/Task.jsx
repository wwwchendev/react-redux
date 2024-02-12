import React, { useEffect, useState } from 'react'
import { loadTasks } from '@/store/tasks'
import { useDispatch, useSelector } from 'react-redux'

const Task = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector(state => state.tasks);
  // console.log(useSelector(state => state.tasks));
  useEffect(() => {
    dispatch(loadTasks())
  }, [])

  return (
    <div>
      {loading && <p>載入中...</p>}
      {tasks.map((task, idx) => {
        return <p key={task.id}>{task.task}</p>
      })}
    </div>
  )
}

export default Task