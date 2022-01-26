import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="lg:container mx-auto p-6 bg-white">
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
    </div>
  )
}
