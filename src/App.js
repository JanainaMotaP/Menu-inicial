import './App.css';
import Banner1 from './Components/img/SALVE.png';
import Banner2 from './Components/img/Story.png';
import Banner3 from './Components/img/Videos.png';


 function App() {
  return(
    <>
    

    <section> 
        
        <div className='banner-principal'>
        <img className='img' src={Banner1} /> 
        </div>

        <div className='banner-story'>
          <img className='img-story' src={Banner2} />

          <img className='img-videos' src={Banner3} />  
       
        </div>

    

       </section>

               
        
        
       </>
       
         
  );
}

export default App;
