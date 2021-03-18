import svgStats from "../../Static/Images/statistics.svg";
import svgCourses from "../../Static/Images/courses.svg";
import svgTodo from "../../Static/Images/todos.svg";
const Statistic = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <section className="w-full flex items-center flex-col mt-10">
          <div
            className={`flex flex-col md:flex-row w-full items-center items-center justify-between md:space-x-10`}
          >
            <div className="flex  flex-col md:ml-50">
              <h1 className="heading font-sora font-bold text-4xl mb-5 mt-20 md:mt-10 md:mt-0">
                Keep Track of your GPA
              </h1>
              <p className="w-full md:w-5/6">
                Keep track of your current assignment and scores to
              </p>
            </div>
            <img src={svgStats} alt="" height="200px" width="450px" />
          </div>
        </section>
        <section className="w-full flex items-center flex-col mt-10">
          <div
            className={`flex flex-col md:flex-row w-full items-center items-center justify-between md:space-x-10`}
          >
            <img src={svgCourses} alt="" height="200px" width="450px" />
            <div className="flex  flex-col md:ml-50">
              <h1 className="heading font-sora font-bold text-4xl mb-5 mt-20 md:mt-10 md:mt-0">
                Manage your courses
              </h1>
              <p className="w-full md:w-5/6">
                Keep track of your current assignment and scores to
              </p>
            </div>
          </div>
        </section>
        <section className="w-full flex items-center flex-col mt-10">
          <div
            className={`flex flex-col md:flex-row w-full items-center items-center justify-between md:space-x-10`}
          >
            <div className="flex  flex-col md:ml-50">
              <h1 className="heading font-sora font-bold text-4xl mb-5 mt-20 md:mt-10 md:mt-0">
               View your todo items
              </h1>
              <p className="w-full md:w-5/6">
                Keep track of your current assignment and scores to
              </p>
            </div>
            <img src={svgTodo} alt="" height="200px" width="450px" />
          </div>
        </section>
      </div>
    </div>
  );
};
export default Statistic;
