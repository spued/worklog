import React,{ useContext, useEffect, useState, useMemo } from 'react';
import { AuthContext } from "../contextes/AuthContext";
import { ref, onValue, remove } from "firebase/database";
import db from "../firebase/firebase";
import { useTable } from 'react-table'
import moment from "moment";

const WorkList = ({ lasttime }) => {
    const currentDate = new Date();
    const _lastday = currentDate.getTime() - lasttime;
    const user = useContext(AuthContext);

    const _columns = [
        {
            Header: "Start date",
            accessor: "startAt",
            Cell: ({ cell: { value } }) => {
                let _time = new Date(value*1000);
                return (
                <div>{ moment(_time).format('DD/MM/YYYY HH:mm ')} </div>
                )
            }
        },
        {
            Header: "Details",
            accessor: "message",
        }
        ,
        {
            Header: "Action",
            accessor: "id",
            Cell: ({ cell: { value } }) => {
                return (
                    <button className="button" id={value} onClick={ handleItemRemove }> x </button>
                )
            }
        }
    ];

    const [ workList, setWorkList ] = useState([]);
    
    useEffect(() => {
        onValue(ref(db, '/worklog_data/' + user.uid), (snapshot) => {
            if(snapshot.val()) {
                let _data = snapshot.val();
                return setWorkList(_data);
            }
        });
    }, []);
   
    const handleItemRemove = (evt) => {
        if(window.confirm("Will remove this?")) {
            return remove(ref(db,"/worklog_data/" + user.uid + "/" + evt.target.id),() => {
                        console.log('remove', evt.target.id);
                    });
        } else {
            return;
        }
    }

    function _drawWorkListTable() {
        const columns = useMemo(() => _columns,[]);

        let _keys = Object.keys(workList);
        let _values = Object.values(workList);
        const _list = _keys.map((item, key) => {
            return {..._values[key], 'id' : item }
        });

        const data = _list.filter(item => item.startAt*1000 >  _lastday);
        const tableInstance = useTable({
            columns,
            data
        })
     
        const { getTableProps, 
            getTableBodyProps, 
            headerGroups, 
            footerGroups, 
            rows, 
            prepareRow
        } = tableInstance
        return (
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}> 
                                {column.render('Header')}
                            </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>
                                {cell.render('Cell')}</td>
                                    })}
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
    return (
        <div className='content-container'>
            <h3>Today view</h3>
            <ul className='list-body'>
                { _drawWorkListTable() }
            </ul>
        </div>
    )
}
export { WorkList as default }