import React, { useEffect, useState } from 'react'
import axios from "axios";


import Table from "../Component/Table/table";

export default function () {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        let rows = [];
        axios
            .get(global.config.apiurl + 'admin/userlist')
            .then((res) => {
                const alldata = res.data;
                console.log(alldata);
                alldata.map((val, ind, arr) => {
                    rows.push([ ind+1, val.fname, val.lastname, val.username, val.email]);
                });
                setUsers(rows);
                console.log(rows);
            });
    }, []);

    return (
        <div><h1> Contest List</h1>
            <Table
                tableHeaderColor="primary"
                tableHead={[ 'Sr. ','FName','Last Name', 'UserName', 'email']}
                tableData={users}
            />
        </div>
    )
}