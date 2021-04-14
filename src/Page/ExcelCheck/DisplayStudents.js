import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPlagarismData } from "../../Redux/Action/excel";

const DisplayStudents = ({ excel, getPlagarismData }) => {
  useEffect(() => {
    const fileName = new URLSearchParams(window.location.search).get(
      "fileName"
    );
    const assignmentID = new URLSearchParams(window.location.search).get(
      "assignmentID"
    );
    const formData = new FormData();
    formData.append("fileName", fileName);
    formData.append("assignmentID", assignmentID);
    getPlagarismData(formData);
  }, []);
  return (
    <div className=" flex items-center justify-start flex-col">
      <div className=" flex w-5/6  h-full flex-col">
        <div className="md:flex mt-20 md:items-center  md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:truncate">
              Potential Plagarism
            </h2>
          </div>
        </div>
        <div>
          <div className="flex flex-col mt-20">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Student Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Cheated From
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Filename
                        </th>
                        {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th> */}
                        {/* <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {excel.plagarised.map((item) => (
                        <tr key={item.email}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.studentName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.cheatedFrom}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.filename}
                          </td>
                          {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.role}</td> */}
                          {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                     
                    </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* {excel.plagarised.map((item) => (
          <>
            <div>{item.studentName}</div>
            <div>{item.cheatedFrom}</div>
          </>
        ))} */}
        </div>
      </div>
    </div>
  );
};

DisplayStudents.propTypes = {
  excel: PropTypes.object.isRequired,
  getPlagarismData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  excel: state.excel,
});

const mapDispatchToProps = {
  getPlagarismData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayStudents);
