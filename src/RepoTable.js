import React from 'react'; 

const RepoTable = ({items}) => {
    if(!items){
        return null
    }
    else{
    return(
        
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Repo Name</th>
                <th scope="col">Forks</th>
            </tr>
            </thead>
            <tbody>
            {
        
            items.map( (item, i) =>
            <tr key={item.id}>
                <th scope="row">{i + 1}</th>
                <td> 
                <p key={i}>{item.name}</p>
                </td>
                <td> <p>{item.forks_count}</p></td>
            </tr>
            )
            }
            </tbody>
        </table>
    )
    }
}

export default RepoTable ;