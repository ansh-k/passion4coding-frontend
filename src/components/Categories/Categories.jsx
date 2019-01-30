import React,{Component,Fragment} from 'react';
import Courses from '../Courses/Courses';
import CategoriesList from '../../json/categories.json';
import CoursesList from '../../json/courses.json';

export default class Categories extends Component {
  state = {
    categories: [],
    categoryId: '',
    showCourses: false,
    courses: []
  }

  componentDidMount() {
    this.setState({
      categories: CategoriesList.filter(category => category.Verticals.toString() === this.props.match.params.id)
    })
  }

  handleCoursesFilter = (e) => {
    this.setState({
      courses: CoursesList.filter(course => course.Categories.toString() === e.target.id),
      categoryId: e.target.id,
      showCourses: !this.state.showCourses
    });
  }

  render() {
    const { categories, categoryId, courses, showCourses } = this.state;
    return(
      <div>
        <ul>
          {categories.map(({ Id,Name,Verticals,State },index) => 
            <Fragment key={index}>
              <li id={Id} onClick={this.handleCoursesFilter}>{Name}</li>
              {(showCourses && categoryId.toString() === Id.toString()) && <Courses list={courses} />}
            </Fragment>
         )}
        </ul>
      </div>
    );
  }
}