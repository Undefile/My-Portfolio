import React , {useState} from 'react'

const Contact = () => {

  // State for the form inputs 
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')


  // This function will be called when the form is submitted
  // It will log the form inputs to the console and then clear the inputs
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name, surname, email, message)
    setName('')
    setSurname('')
    setEmail('')
    setMessage('')
  }


  return (
    <div id='contact' className='flex min-h-screen w-full flex-col justify-center items-center gap-16 p-8'>
      <h1 className='text-5xl text-center font-light text-teal-600  '>Get in touch!</h1>

      <form onSubmit = {(e)=> {
        submitHandler(e)
      }}
      className='flex flex-col w-full max-w-md gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl'>

        <div className='flex flex-col gap-4'>

          <input 
          value = {name}
          onChange = {(e) => setName(e.target.value)}
          type="text" placeholder='Your Name' className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500'/>

          <input 
          value = {surname}
          onChange = {(e) => setSurname(e.target.value)}
          type="text" placeholder='Your Surname' className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500'/>

          <input
          value = {email}
          onChange = {(e) => setEmail(e.target.value)}
          type="text" placeholder='Your Email' className='rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500'/>
        </div>

        <textarea 
        value = {message}
        onChange = {(e) => setMessage(e.target.value)}   
        placeholder='Your Message' className='h-32 w-full resize-none rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500'></textarea>
        <button className='rounded-lg border-2 border-teal-400 bg-teal-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-teal-600'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact