import { Tab } from '@headlessui/react'
import {useState} from 'react'

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

      <div className="w-screen px-8 py-2">
        <Tab.Group>
          <Tab.List className="flex p-1">
           
            <Tab
            key='1'
            className={({ selected }) =>
            classNames(
              'px-5 flex gap-2 py-3 rounded-full text-sm leading-5 font-medium transition duration-500',
              'active:text-blue-500',
              selected
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-400'
            )
            }
            >

              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
              </svg>

              Projects
            </Tab>

            <Tab
            key='2'
            className={({ selected }) =>
            classNames(
              'px-5 flex gap-2 py-3 rounded-full text-sm leading-5 font-medium transition duration-500',
              'active:text-blue-500',
              selected
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-400'
            )
            }
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
              Analysis
            </Tab>

            <Tab
            key='3'
            className={({ selected }) =>
            classNames(
              'px-5 flex gap-2 py-3 rounded-full text-sm leading-5 font-medium transition duration-500',
              'active:text-blue-500',
              selected
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-400'
            )
            }
            >

              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>

              Tasks
            </Tab>

            <Tab
            key='4'
            className={({ selected }) =>
            classNames(
              'px-5 py-3 flex gap-2 rounded-full text-sm leading-5 font-medium transition duration-500',
              'active:text-blue-500',
              selected
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-400'
            )
            }
            >

            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
            </svg>

              Notes
            </Tab>

          </Tab.List>
          <hr />
          <Tab.Panels className="mt-2">
           
            <Tab.Panel
                key='1'
                className={classNames(
                  'bg-white rounded-xl p-3',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                )}
              >
                sdgfhgf
            </Tab.Panel>

            <Tab.Panel
                key='2'
                className={classNames(
                  'bg-white rounded-xl p-3',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                )}
              >
                sdgfhgf
            </Tab.Panel>

            <Tab.Panel
                key='3'
                className={classNames(
                  'bg-white rounded-xl p-3',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                )}
              >
                sdgfhgf
            </Tab.Panel>

            <Tab.Panel
                key='4'
                className={classNames(
                  'bg-white rounded-xl p-3',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                )}
              >
                sdgfhgf
            </Tab.Panel>

          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}