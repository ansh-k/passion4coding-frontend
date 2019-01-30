import React from 'react';

const Courses = ({list}) =>(
  <div>
    <ul>
      {list.map(({ Id,Name,Author,Categories,State },index) =>
        <li key={index}>
          {Name}
        </li>
      )}
    </ul>
  </div>
);

export default Courses;