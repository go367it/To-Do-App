import {useState} from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom"

//importing modules for different sections
import Projects from './projects/Project'
import TaskList from './tasks/Tasks'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [ boardName, setBoardName ] = useState("Project Board")

  return (
    <div>

      <div className="flex text-3xl font-semibold my-5 px-8">

        {boardName}

      </div>

      <div className="flex mt-8 mb-3 gap-4 px-4 md:px-8">

        <Link to='/manage/projects'>
          <button
          className="flex gap-2 py-2 px-3 rounded-full text-sm bg-blue-200 text-blue-600"
          >

            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>

            Projects

          </button>
        </Link>

        <Link to='/manage/analysis'>
          <button
          className="flex gap-2 py-2 px-3 rounded-full text-sm bg-pink-200 text-pink-600"
          >

            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>

            Analysis

          </button>
        </Link>

        <Link to='/manage/tasks'>
          <button
          className="flex gap-2 py-2 px-3 rounded-full text-sm bg-yellow-200 text-yellow-600"
          >

            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>

            Tasks

          </button>
        </Link>

        <Link to='/manage/notes'>
          <button
          className="flex gap-2 py-2 px-3 rounded-full text-sm bg-green-200 text-green-600"
          >

            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>

            Notes

          </button>
        </Link>

      </div>
      <hr className="mx-8"/>

      <div>
        
          <Switch>
            <Route path='/manage/projects' exact component={Projects} />
            <Route path='/manage/tasks' exact component={TaskList} />
          </Switch>
        
      </div>
      
    </div>
  )
}