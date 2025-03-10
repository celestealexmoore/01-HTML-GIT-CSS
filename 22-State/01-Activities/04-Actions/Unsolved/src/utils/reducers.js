import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR
} from './actions';

// TODO: Add a comment explaining what the reducer function will do
// Your comment here
export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      let newStudentId;

      if (state.students.length) {
        const studentIds = state.students.map((s) => s.id);

        studentIds.sort((a, b) => a - b);

        newStudentId = studentIds[studentIds.length - 1] + 1;
      } else {
        newStudentId = 1;
      }

      const newStudent = { ...action.payload, id: newStudentId };

      return {
        ...state,
        students: [...state.students, newStudent]
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: [...state.students].filter(
          student => student.id !== action.payload
        )
      };
    }
    case UPDATE_STUDENT: {
      // TODO: Add a comment describing how we get the student index
      // Your comment here
      const studentIndex = state.students.findIndex(
        student => student.id === action.payload.id
      );

      // TODO: Add a comment describing what the spread operator is doing
      // Your code here
      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload
      };

      const newStudentsList = [...state.students];

      newStudentsList[studentIndex] = updatedStudent;

      return {
        ...state,
        students: newStudentsList
      };
    }
    case ADD_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      return {
        ...state,
        majors: [...state.majors, action.payload]
      };
    }
    case REMOVE_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
      return {
        ...state,
        majors: [...state.majors].filter(major => major !== action.payload)
      };
    }
    default:
      return state;
  }
}
