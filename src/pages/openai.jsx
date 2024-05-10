import React from 'react'

const Openai = () => {
  return (
    <div>

<div className="container mx-auto px-4 py-16">
            <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Contact Us</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2">Our Bootcamp Will Help You Apply Your New Skills To Real World Projects Using The Latest Industry Tools And Techniques In Data Science Courses.</p>
              </div>
              <div className="max-w-3xl mx-auto">
                <div className="bg-zinc-200 dark:bg-zinc-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Fill the form below let's discuss</h3>
                  <form action="#" method="POST"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <input type="text" placeholder="Full Name" className="border p-2 rounded w-full" required/>
                      <input type="tel" placeholder="Phone Number" className="border p-2 rounded w-full" required/>
                    </div>
                    <div className="mb-4">
                      <input type="email" placeholder="Email Address" className="border p-2 rounded w-full" required/>
                    </div>
                    <div className="mb-4">
                      <select className="border p-2 rounded w-full">
                        <option>Which Skill are you interested in?</option>
                        <option>Data Science</option>
                        <option>Web Development</option>
                        <option>UI/UX Design</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <textarea placeholder="Request" className="border p-2 rounded w-full" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 w-full">Submit Form</button>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Openai
