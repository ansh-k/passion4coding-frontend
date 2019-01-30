import React,{Component} from 'react';
import Courses from '../Courses/Courses';
import CategoriesList from '../../json/categories.json';
import CoursesList from '../../json/courses.json';

export default class Categories extends Component {
  state = {
    categories: [],
    categoryId: '',
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
      categoryId: e.target.id
    });
  }

  render() {
    const { categories, categoryId, courses } = this.state;
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <ul className='list-group main-list shadow-lg'>
              {categories.map(({ Id,Name },index) => 
                <li key={index} className='list-group-item'>
                  <div>
                    <h6>
                      <a id={Id} onClick={this.handleCoursesFilter} data-toggle="collapse" href={`#collapseExample${index}`} role="button" aria-expanded="false" aria-controls={`collapseExample${index}`}>{Name}</a>
                    </h6>
                    </div>
                    <div className="collapse" id={`collapseExample${index}`}>
                      { categoryId.toString() === Id.toString() && <Courses list={courses} /> }
                    </div>
                </li>
            )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}