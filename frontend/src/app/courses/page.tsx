"use client"

import React, { Fragment, useEffect, useState } from 'react'
import axios from '../../../node_modules/axios/index'

const APIkey = '8cc5e68a56d49b0401e15029e9079f7d5d6c925f8f831f87f539551e8447cccf3820087b5d24ab3dad5d81756c423bf55587e94dfb0939faf327043fe49600d65da7312898ffb7a2c4d0df63f15837fc2371ebe56c194e323e1eca073e53252613a8a9cc5aedac8559e583b563b5e1f807775f9c716f259d05f5b4c9ca3fa336'

const Courses = () => {
  const [courses, setCourses] = useState([])


  const getCourses = async () => {
    
    try {
      

    const response = await axios.get('http://localhost:1337/api/courses', {
       headers: {
      'Authorization': 'Bearer ' + APIkey
    }
    })
      
      return response.data


    } catch (error) {
      
    }

  }
  

  useEffect(() => {
    
    getCourses().then((data) => {

      console.log(data)

      setCourses(data.data)

    })
  

  }, [])
  

  console.log(`page.tsx - line: 47 ->> courses.length`, courses)
  
  // return null

  return (
    <div>{courses.length > 0 && courses.map((course) => {
      
      console.log(`page.tsx - line: 54 ->> course`, course)
      return (
        <Fragment key={course.id}>
          <h2>{course.attributes.courseTitle}</h2>
          <p>{course.attributes.courseDescription}</p>
        </Fragment>
      )
    })}</div>
  )
}

export default Courses