import React from 'react'
import Sidemenu from './Sidemenu'
import DataEdit from './DataEdit'

function Stats() {
  return (
    <>
    <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted Job Portal</h2>
    </div>

    <div className="mt-8 sm:mt-1">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Pending Applications</dt>

          <dd className="text-4xl font-extrabold  text-sky-700 md:text-5xl">26</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Interviews Scheduled</dt>

          <dd className="text-4xl font-extrabold  text-sky-700 md:text-5xl">24</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Jobs Declined</dt>

          <dd className="text-4xl font-extrabold text-sky-700 md:text-5xl">16</dd>
        </div>
      </dl>
    </div>
  </div>
</section>

<DataEdit/>
    </>
  )
}

export default Stats