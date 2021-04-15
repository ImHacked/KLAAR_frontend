import React, {useMemo, useState, useEffect} from "react";
import axios from 'axios'
import Table from "./Table";

import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [a, setA] = useState('');
    useEffect(() => {
        (async () => {
            const result = await axios(
                "https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI"
            );
            setData(result.data);
            
           
        })();
    }, []);
    const columns = useMemo(() => [
        {
            Header: 'IFSC',
            accessor: 'ifsc'
        }, {
            Header: 'Bank ID',
            accessor: 'bank_id'
        }, {
            Header: 'Branch',
            accessor: 'branch'
        }, {
            Header: 'Address',
            accessor: 'address'
        }, {
            Header: 'City',
            accessor: 'city'
        }, {
            Header: 'District',
            accessor: 'district'
        }, {
            Header: 'State',
            accessor: 'state'
        }, {
            Header: 'Bank Name',
            accessor: 'bank_name'
        }
    ], [])

    function search(rows) {
        return rows.filter(
            (row) => row.ifsc.toLowerCase().indexOf(a) > -1 || row.bank_id.toString().toLowerCase().indexOf(a) > -1 || row.branch.toLowerCase().indexOf(a) > -1 || row.address.toLowerCase().indexOf(a) > -1 || row.city.toLowerCase().indexOf(a) > -1 || row.district.toLowerCase().indexOf(a) > -1 || row.state.toLowerCase().indexOf(a) > -1 || row.bank_name.toLowerCase().indexOf(a) > -1
        );
    }

    return (
        <div className="App">

            <div className="heading">
                <h1>Bank Searching System</h1>
            </div>
            <div className="input__box">
                <label for="city">Choose a City:</label>

                <select name="city" id="city">
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bangalore">Delhi</option>
                    <option value="Delhi">Chennai</option>
                    <option value="Patna">Kolkata</option>
                    <option value="Agartala">Hyderabad</option>
                </select>
                <input
                    className="input"
                    type='text'
                    value={a}
                    onChange={(e) => setA(e.target.value)}/>
            </div>
            
            <div className="table">

                <Table columns={columns} data={search(data)}></Table>

            </div>

        </div>
    );
}

export default App;
