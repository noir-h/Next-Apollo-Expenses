import { Dialog, Transition } from '@headlessui/react'
import { FormEvent, ChangeEvent, Fragment, useState, VFC } from 'react'
import { listVar } from '../.cache'
import { useReactiveVar } from '@apollo/client'

export const Expenses: VFC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState({ title: '', price: '', category: '' })
  const todos = useReactiveVar(listVar)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // submit buttonはdefaultでpageをリロードするので、リロードを無効にする
    e.preventDefault()
    listVar([
      ...listVar(),
      {
        title: input.title,
        price: input.price,
        category: input.category,
      },
    ])
    setInput({ title: '', price: '', category: '' })
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="mt-8 grid grid-cols-10 grid-rows-1">
        {/* 一行目 */}
        <div className="h-60 bg-blue-200 col-start-2 col-span-5 rounded shadow-lg overflow-hidden">
          <h2>test</h2>
        </div>{' '}
        {/* 二列分 */}
        <div className="h-60 bg-red-300 col-start-8 col-span-2 rounded shadow-lg">
          <h2>test</h2>
        </div>
      </div>

      <div className="mt-2 mx-20 rounded shadow-lg">
        <h2 className="p-6 font-bold">最近の支出</h2>
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="w-1/2 px-4 py-2 text-left">Title</th>
              <th className="w-1/4 px-4 py-2 text-left">Author</th>
              <th className="w-1/4 px-4 py-2 text-left">Views</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((task, index) => {
              return (
                <tr key={index}>
                  <td className="border-b-2 w-1/2 px-4 py-2">{task.title}</td>
                  <td className="border-b-2 w-1/4 px-4 py-2">{task.price}</td>
                  <td className="border-b-2 w-1/4 px-4 py-2">
                    {task.category}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="my-4 inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          家計簿に登録する
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block h-90 w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 text-gray-900"
                >
                  出費を登録して下さい。
                </Dialog.Title>
                <form
                  className="mt-4 flex flex-col justify-center items-center"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="mb-3 px-3 py-2 border border-gray-300"
                    placeholder="test"
                    value={input.title}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setInput({ ...input, title: e.target.value })
                    }
                  />
                  <input
                    className="mb-3 px-3 py-2 border border-gray-300"
                    placeholder="1000"
                    value={input.price}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setInput({ ...input, price: e.target.value })
                    }
                  />
                  <input
                    className="mb-3 px-3 py-2 border border-gray-300"
                    placeholder="category"
                    value={input.category}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setInput({ ...input, category: e.target.value })
                    }
                  />

                  <div className="mt-4">
                    <button
                      disabled={!input}
                      type="submit"
                      className="disabled:opacity-40 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      登録
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
