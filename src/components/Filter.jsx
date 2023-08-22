import React from 'react'

const Filter = ({filter_todo}) => {
  return (
    
    <select name="" id="" onChange={((e) => filter_todo(e.target.value))}>
            {/* <option value="">All</option> */}
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
    
  )
}

export default Filter