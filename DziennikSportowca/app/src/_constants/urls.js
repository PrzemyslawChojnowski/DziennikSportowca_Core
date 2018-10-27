const urls = {
    default: "/",
    home: "/home",
    login: "/login",
    register: "/register",
    calculators: "/calculators",

    //Exercise
    newExerciseForm: "/exercise/new",
    exerciseOverviewForm: id => `/exercise/${id}`,
    exerciseEditForm: id => `/exercise/edit/${id}`,
    exerciseDeleteForm: id => `/exercise/delete/${id}`,
    exerciseList: "/exercises",
};

export default urls;
