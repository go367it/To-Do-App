import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  return (
    <div>
      <div className="w-screen px-2 py-2">
        <Tab.Group>
          <Tab.List className="flex p-1">
           
            <Tab
            key='1'
            className={({ selected }) =>
            classNames(
              'w-full py-3 rounded-sm text-sm leading-5 font-medium transition duration-500',
              'active:text-blue-500',
              selected
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-400'
            )
            }
            >
              jhabs
            </Tab>

            <Tab
            key='2'
            className={({ selected }) =>
            classNames(
              'w-full py-3 rounded-sm text-sm leading-5 font-medium transition duration-500',
              'active:text-blue-500',
              selected
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-400'
            )
            }
            >
              jhabs
            </Tab>

            <Tab
            key='3'
            className={({ selected }) =>
            classNames(
              'w-full py-3 rounded-sm text-sm leading-5 font-medium transition duration-500',
              'active:text-blue-500',
              selected
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-400'
            )
            }
            >
              jhabs
            </Tab>

            <Tab
            key='4'
            className={({ selected }) =>
            classNames(
              'w-full py-3 rounded-sm text-sm leading-5 font-medium transition duration-500',
              'active:text-blue-500',
              selected
                ? 'bg-blue-200 text-blue-700'
                : 'text-gray-400'
            )
            }
            >
              jhabs
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