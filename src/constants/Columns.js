import moment from "moment";

export const COLUMNS = [
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
              <button className="button" id={value}> x </button>
          )
      }
  }
];