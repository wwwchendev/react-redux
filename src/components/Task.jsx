import React, { useContext } from 'react'
import StoreContext from '../contexts/storeContext'

const Task = () => {
  const store = useContext(StoreContext);
  console.log(store.getState());
  return (
    <div>Task</div>
  )
}

export default Task