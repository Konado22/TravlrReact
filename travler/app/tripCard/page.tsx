'use server'
import {promises as fs} from 'fs';
/*indvidual trip card
adding state for accordian
and page redirect to individual trip page*/

export default async function Tripcard () {
    const file = await fs.readFile(process.cwd() +'/app/seedData/trips.json', 'utf8');
    const data = JSON.parse(file);
//function to read json file until database integration
    return (
        <>
         {data.map((trip) => {
            console.log(trip);
                <div key={trip.code}>
                    <h1>{trip.name}</h1>
                    <h2>{trip.perPerson}</h2>
                    
                </div>
         })}
        </>
    );
  }