import React from 'react'; 

const IssueTable = ({issues}) => {

   
    if(!issues){
        return null
    }
    else{
    return(
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Issue #</th>
                <th scope="col">Repo Name</th>
                <th scope="col">open</th>
            </tr>
            </thead>
            <tbody>
            {
            issues.map( (item, i) =>
            <tr key={item.id}>
                <th scope="row">{item.number}</th>
                <td> 
                <p key={i}>{item.title}</p>
                </td>
                <td> <a href={item.html_url}>View</a></td>
            </tr>
            )
            }
            </tbody>
        </table>
      )
    }
}

export default IssueTable;