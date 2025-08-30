
import Card from './components/card'

import Header from './components/Header'

import Footer from './components/Footer'


function App() {

  let myObj = {
    username: "Ritesh yadav",
    age: 22
  }

  let newArr = [1, 2, 3, 4]


  return (
    <>

      <main className='relative'>
        
        <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind</h1>


        {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.unsplash.com/photo-1744294337417-d6c49912c43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"></img>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}
      
        <Card username="Ritesh" btnText="Click me" />
        <Card btnText="visite me"/>
        
      </main>
    </>

  )
}

export default App
