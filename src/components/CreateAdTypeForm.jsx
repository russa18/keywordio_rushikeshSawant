import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Submitted from './submitted';


const CreateAdTypeForm = () => {
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate()

    const { formType } = useParams()

    function submitData(e) {
        e.preventDefault();
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
            navigate('/create-ad')
        }, 600);

    }

    return (
        <div className='shadow-md rounded-md p-4 m-auto my-5  w-[96%] border-2 border-slate-100'>
            {
                open ? <Submitted /> : null
            }
            <form onSubmit={submitData}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Create Text & Media</h2>

                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="heading-one" className="block text-sm font-medium leading-6 text-gray-900">
                                    Heading 01
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="heading-one"
                                        id="heading-one"
                                        placeholder='Add a heading that would make users interested'
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />

                                </div>

                                <label htmlFor="heading-two" className="block text-sm font-medium leading-6 text-gray-900 mt-2">
                                    Heading 02
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="heading-two"
                                        id="heading-two"
                                        placeholder='Add a heading that would make users interested'
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="description-one" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description 01
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        type="text"
                                        name="description-one"
                                        id="description-one"
                                        placeholder='Add primary text to help users to understand more about your products, services or offers'
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 h-[120px]"
                                    />
                                </div>
                            </div>


                            {
                                formType === 'mediaForm' ? (
                                    <>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="LMI" className="block text-sm font-medium leading-6 text-gray-900">
                                                Landscape Marketing Image(1:9:1)
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="LMI"
                                                    id="LMI"
                                                    placeholder='Add the URL of the image you want to add for the ad'
                                                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="PMI" className="block text-sm font-medium leading-6 text-gray-900">
                                                Portrait Marketing Image(4:5)
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="PMI"
                                                    id="PMI"
                                                    placeholder='Add the URL of the image you want to add for the ad'
                                                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="SMI" className="block text-sm font-medium leading-6 text-gray-900">
                                                Square Marketing Image (1:1)
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="SMI"
                                                    id="SMI"
                                                    placeholder='Add the URL of the image you want to add for the ad'
                                                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="video-url" className="block text-sm font-medium leading-6 text-gray-900">
                                                Video URL
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    name="video-url"
                                                    id="video-url"
                                                    placeholder='Add the URL of the Video you want to use for the ad'
                                                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : null
                            }


                            <div className="sm:col-span-3">
                                <label htmlFor="business-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Business Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="business-name"
                                        id="business-name"
                                        placeholder='Add your business name'
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />

                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="button-label" className="block text-sm font-medium leading-6 text-gray-900 ">
                                    Button label
                                </label>
                                <div className="mt-2 w-full">
                                    <select
                                        id="button-label"
                                        name="button-label"
                                        className="block w-full rounded-md border-0 p-2.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option >Select a label that best suits your ad</option>
                                        <option>A</option>
                                        <option>B</option>
                                        <option>C</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="website-url" className="block text-sm font-medium leading-6 text-gray-900">
                                    Website URL
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="website-url"
                                        id="website-url"
                                        placeholder='Add the URL of the landing page you want to redirect users to'
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link to="/create-ad" className="text-sm font-semibold leading-6 text-gray-900 ">
                        Back
                    </Link>
                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default CreateAdTypeForm