import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENET = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENET, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENET, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENET);
  }

  getCourses() {
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case actionTypes.UPDATE_COURSE:
      _courses = _courses.map(course => course.id === action.course.id ? action.course : course);
      store.emitChange();
      break;
    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      store.emitChange();
      break;
    default:
  }
});

export default store;