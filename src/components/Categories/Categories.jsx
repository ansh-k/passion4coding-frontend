import React,{Component} from 'react';
import Courses from '../Courses/Courses';
import CategoriesList from '../../json/categories.json';
import CoursesList from '../../json/courses.json';

export default class Categories extends Component {
  state = {
    categories: [],
    courses: []
  }

  componentDidMount() {
    this.setState({
      categories: CategoriesList.filter(category => category.Verticals.toString() === this.props.match.params.id)
    })
  }

  handleCoursesFilter = (e) => {
    this.setState({
      courses: CoursesList.filter(course => course.Categories.toString() === e.target.id)
    });
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.categories.map(({ Id,Name,Verticals,State },index) => 
            <li key={index} id={Id} onClick={this.handleCoursesFilter}>{Name}</li>
          )}
          <Courses list={this.state.courses} />
        </ul>
      </div>
    );
  }
}