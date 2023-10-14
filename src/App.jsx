
import './App.css'
import CarlosBalmaceda from './components/CarlosBalmaceda'
import CarlosCoronel from './components/CarlosCoronel'
import EdisonMaya from './components/EdisonMaya'
import JonatanCruz from './components/JonatanCruz'
import MauricioNolting from './components/MauricioNolting'
import OliviaBurgos from './components/OliviaBurgos'
import SamuelBenedetti from './components/SamuelBenedetti'
import YurikRivera from './components/YurikRivera'

function App() {

  return (
    <main className='bg-black min-h-screen text-white text-center'>
      <h2 className='text-xl font-semibold'>Practica Grupal GIT</h2>
      <h3 className='font-semibold'>Integrantes</h3>
      <YurikRivera/>
      <CarlosBalmaceda/>
      <CarlosCoronel/>
      <MauricioNolting/>
      <EdisonMaya/>
      <JonatanCruz/>
      <OliviaBurgos/>
      <SamuelBenedetti/>
      
    </main>
  )
}

export default App
