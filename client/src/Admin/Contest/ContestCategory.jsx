import React, { useEffect, useState } from 'react'
import axios from "axios";


import Table from "../Component/Table/table";

export default function () {

    const [contest, setContest] = useState([]);
    useEffect(() => {
        let rows = [];
        axios
            .get(global.config.apiurl + 'contestcategory')
            .then((res) => {
                const alldata = res.data;
                console.log(alldata);
                alldata.map((val, ind, arr) => {
                    rows.push([ ind+1,<img alt="card" src={val.background} height='100px' width='100px' />, val.name]);
                });
                setContest(rows);
                console.log(rows);
            });
    }, []);

    return (
        <div><h1> Contest Category</h1>
            <Table
                tableHeaderColor="primary"
                tableHead={[ 'SR.','Image', 'Name']}
                tableData={contest}
            />
        </div>
    )



}