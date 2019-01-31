import React from 'react';

const Courses = ({list}) =>(
  <div className='row'>
    <ul className='list-group w-100'>
      {list.map(({ name,author,state },index) =>
        <li className='list-group-item' key={index}>
          <div>
            <h6>Name: {name}</h6>
            <div>Author: {author}</div>
            <div>Status: {state}</div>
          </div>
        </li>
      )}
    </ul>
  </div>
);

export default Courses;