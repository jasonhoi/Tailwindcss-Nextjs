import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="xl:container mx-auto p-10 bg-white">
        <form className="mb-6">
            <label className="label">Email</label>
            <input type="text" className="form-input mb-4" defaultValue="" placeholder='name@example.com'/>
            
            <label className="label">Username</label>
            <input type="text" className="form-input mb-4" defaultValue="some input value" />
            
            <label htmlFor="password">Your password</label>
            <input type="password" id="password" className="form-input mb-4" placeholder="" required/>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-6">
                <input id="remember" aria-describedby="remember" type="checkbox" className="form-checkbox" required/>
              </div>
              <div className="ml-3">
                <label htmlFor="remember">Remember me</label>
              </div>
            </div>

            <div className="space-x-4">
              <button type="button" className="btn-purple">Save changes</button>
              <button className="btn-gray">Cancel</button>
            </div>
        </form>
<<<<<<< HEAD
        
        <div className="flex flex-row gap-2">
          <button className="leading-5 font-semibold active:bg-violet-800 
          focus:ring-violet-300 focus:ring focus:outline-none text-white text-sm 
          bg-violet-500 hover:bg-violet-600 text-center rounded-full px-5 py-2">Button</button>
          <button type="button" className="bg-violet-500 hover:bg-violet-600 focus:outline-none 
          focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 
          rounded-full font-semibold text-white">
              Save changes
          </button>
        </div>
        
=======
>>>>>>> e12d8335ba9815d7632ebb0213b464427d1711d8
    </div>
  )
}
