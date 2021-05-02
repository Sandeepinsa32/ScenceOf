import React, { useEffect, useState } from 'react'
import axios from "axios";


import Table from "../Component/Table/table";

export default function () {

    const [imageslist, setImageslist] = useState([]);
    useEffect(() => {
        let rows = [];
        axios
            .get(global.config.apiurl + 'admin/imageslist')
            .then((res) => {
                const alldata = res.data;
                console.log(alldata);
                alldata.map((val, ind, arr) => {
                    rows.push([ind + 1, <img src={val.images} height='100px' width='100px' />, val.contestname, val.sponser, val.username, val.useremail]);
                });
                setImageslist(rows);
                console.log(alldata);
            });
    }, []);

    return (
        <div><h1> Images Uploaded List</h1>
            <Table
                tableHeaderColor="primary"
                tableHead={['Sr. ', 'Image', 'Contest Name', 'Sponser','Uploader name', 'Uploader Email']}
                tableData={imageslist}
            />
        </div>
    )
}