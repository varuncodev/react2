import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState([])
  const [formDetails, setFormDetails] = useState({
    name: '',
    age: '',
  })

  console.log(formDetails);

  const fetchData = async () => {
    const response = await axios({
      url: 'https://69cbb82e0b417a19e07b1b1f.mockapi.io/todoapp/v1/todos',
    })

    setUser(response.data)
  }

  const postdata = async () => {
    if(formDetails.name === '' || formDetails.age === '') {
      alert('Please fill all the fields')
      return
    }
    await axios({
      url: 'https://69cbb82e0b417a19e07b1b1f.mockapi.io/todoapp/v1/todos',
      method: 'POST',
      data: formDetails,
    })

    setFormDetails({
      name: '',
      age: '',
    })

    fetchData()
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

 
  const editdata = async (userdetails) => {
    await axios({
      url: `https://69cbb82e0b417a19e07b1b1f.mockapi.io/todoapp/v1/todos/${formDetails.id}`,
      method: 'PUT',
      data: formDetails,
    })

    setFormDetails({
      name: '',
      age: '',
    })

    fetchData()

    setFormDetails({
      ...userdetails,
      editMode: true,
    })
  }


  const deleteData = async (id) => {
        await axios({
      url: `https://69cbb82e0b417a19e07b1b1f.mockapi.io/todoapp/v1/todos/${id}`,
      method: 'DELETE',
      data: formDetails,
    })


    fetchData()

  }


   useEffect(() => {
    fetchData()
  }, [])




  return (
    <>
      <div className="text-2xl font-bold">App</div>

      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        onChange={handleChange}
        value={formDetails.name ?? ""}
      />

      <input
        type="number"
        placeholder="Enter Age"
        name="age"
        onChange={handleChange}
        value={formDetails.age ?? ""}
      />

      {formDetails.editMode ? (
        <button
          onClick={editdata}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          SAVE Data
        </button>
      ) : (
        <button
          onClick={postdata}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          POST Data
        </button>
      )}

      {user.map((userdetails) => (
        <div key={userdetails.id} className="border p-4 m-2">
          <p>{userdetails.name}</p>
          <p>{userdetails.age}</p>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={() => setFormDetails({ ...userdetails, editMode: true })}
          >
            Edit
          </button>

          <button className="bg-red-500 ml-3 text-white px-4 py-2 rounded"
          onClick ={() => deleteData(userdetails.id)}>
            Delete
          </button>
        </div>
      ))}

      
    </>
  )
}

export default App