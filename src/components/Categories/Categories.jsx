import React,{Component} from 'react';
import Courses from '../Courses/Courses';
import api from '../../utility/query';
import CoursesList from '../../json/courses.json';

export default class Categories extends Component {
  state = {
    categories: [],
    categoryId: '',
    courses: []
  }

  async componentDidMount() {
    const { data: { vertical_categories } } = await api.get(`/verticals/${this.props.match.params.id}`);
    this.setState({
      categories: vertical_categories
    })
  }

  handleCoursesFilter = async (e) => {
    const { data: { category, category_courses } } = await api.get(`/categories/${e.target.id}`);
    this.setState({
      courses: category_courses,
      categoryId: category.id
    });
  }

  render() {
    const { categories, categoryId, courses } = this.state;
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <ul className='list-group main-list shadow-lg'>
              {categories.map(({ id,name },index) => 
                <li key={index} className='list-group-item'>
                  <div>
                    <h6>
                      <a id={id} onClick={this.handleCoursesFilter} data-toggle="collapse" href={`#collapseExample${index}`} role="button" aria-expanded="false" aria-controls={`collapseExample${index}`}>{name}</a>
                    </h6>
                    </div>
                    <div className="collapse" id={`collapseExample${index}`}>
                      { categoryId.toString() === id.toString() && <Courses list={courses} /> }
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