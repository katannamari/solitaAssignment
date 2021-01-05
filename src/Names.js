import React, {useState} from 'react';
import {names} from './names/names.json';

export default function Names() {
    const [sortMode, setSortMode] = useState('Popularity');
    let nameAmount = 0;

    for (const name of names) {
        nameAmount += name.amount;
    };

    names.sort((a, b) => {
        if (sortMode === "Popularity") {
            return (a.amount < b.amount) ? 1 : -1;
        } 
            return (a.name > b.name) ? 1 : -1;
    });
    return (
            
            <div>
                <div>
                <select name ="sort" type="sort" onChange={(val) => {
                    setSortMode(val.target.value);
                    }}>
                    <option value="Popularity">Popularity</option>
                    <option value="Alphabetical">A-Z</option>
                </select>

                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>About</th>
                        </tr>
                    </thead>
                    <tbody>

                
                    
                {names.map((names, key) => {
                    return (
                        <tr key={key}>
                            <td>{names.name}</td>
                            <td>{names.amount}</td>
                        </tr>
                    );
                })}
                </tbody>
                </table>
                <p>Total number of names: {nameAmount}</p>
            </div>
    )
}
