import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Rent a Car !</h1>

      <form  action="">
        {/* Required Data */}
        <input type="text" placeholder='Name' required/>
        <input type="text" placeholder='Email'required/>
        <input type="text" required/>
        <input type="text" required/>
        <input type="text" required/>

        <select name="" id="">
          <option value=""></option>
          
        </select>

        {/* Optional data */}
        <input type="text" placeholder='Phone Number' required/>
        <input type="text" placeholder='Company Name'/>


      </form>
    </main>
  )
}
