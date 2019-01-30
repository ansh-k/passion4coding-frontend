import React from 'react';

const Courses = ({list}) =>(
  <div className='row'>
    <ul className='list-group w-100'>
      {list.map(({ Name,Author,State },index) =>
        <li className='list-group-item' key={index}>
          <div>
            <h6>Name: {Name}</h6>
            <div>Author: {Author}</div>
            <div>Status: {State}</div>
          </div>
        </li>
      )}
    </ul>
  </div>
);

export default Courses;