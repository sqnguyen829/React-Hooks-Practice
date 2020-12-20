import React, { useState, useEffect } from 'react'
import DogCard from '../Components/DogCard'
import Counter from '../Components/Counter'

export default function DogList() {
    //whatever we put in the () of useState() will be the default value of the state
    let [dogs, setDog] = useState([])
    let [counter, setCounter] = useState(0)

    //useEffect() is similar to componentDidMount() but componentDidMount only runs once, and to get the same effect is 
    //componentDidMount we pass an empty array as the secound argument
    useEffect(() => {
        let isMounted = true // note this flag denote mount status

        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(dogsData => {
            if(isMounted){
                setDog(dogsData)
            }
        })
        //Uncommenting this next line does some interesting things in the console
        // setCounter(counter + 1)
        return () => { isMounted = false } // use effect cleanup to set flag false, if unmounted
    },[])
    //we could put varibles in the array and whenever 
    //the varibles in the array is changed it will run the useEffect

    useEffect(() => {
        console.log('Only logs when counter is updated')
    },[counter])

    console.log(dogs)

  return (
    <div>
        <Counter counter={counter}/>
        <button onClick={() => setCounter(counter + 1)}>increment counter</button>
        DogList
        {dogs.map(dog => <DogCard dog= {dog} key= { dog.id }/>)}
    </div>
  );
}
