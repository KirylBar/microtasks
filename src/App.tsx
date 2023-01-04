import React from 'react';
import {Table} from "./components/Table";


const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
    {manufacturer:'Skoda', model:'A4'},
    {manufacturer:'Lada', model:'Urban'},
]

function App() {
    return (
        <div>
            <h1>Метод map()</h1>
            <Table cars={topCars}/>
        </div>
    );
}

export default App;
