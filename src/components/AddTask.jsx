import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTask } from '@/store/tasks'

const AddTask = () => {
  const [task, setTask] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewTask({
      task: task
    }))
    setTask('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='task' placeholder='輸入新的任務內容...' value={task} onChange={(e) => { setTask(e.target.value) }} />
      <button type='submit'>新增任務</button>

    </form>
  )
}

export default AddTask