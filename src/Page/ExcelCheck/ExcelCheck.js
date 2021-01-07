import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

function ExcelCheck({}) {

  const {register,handleSubmit} = useForm();
  const [uploadedFile,setuploadedFile] = useState(null);
    const onSubmit=(data)=>{
        setuploadedFile(data)
        console.log(data)
        console.log(data.excelFile[0].name)
    }
 
    return (
        <>
         <form onChange={handleSubmit(onSubmit)} className="flex flex-col w-full  justify-center items-center p-6 space-y-12">
        
         <label for="excel_file" className="block text-2xl font-bold text-gray-700 sm:mt-px sm:pt-2">
              Upload File
            </label>
            <div className="mt-2 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg flex justify-center px-10 pt-10 pb-10 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center flex justify-center items-center flex-col">
                    <svg className={`w-12 h-12 ${uploadedFile?`text-green-600`:`text-gray-600`}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    {uploadedFile? uploadedFile.excelFile[0].name:null}
                  <div className="flex text-sm text-gray-600">
                    <label for="excelFile" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input ref={register} id="excelFile" name="excelFile" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    .xlsx upto 10MB
                  </p>
                </div>
                
              </div>
            </div>
        </form>   
        </>
    )
}

ExcelCheck.propTypes = {

}

export default ExcelCheck

