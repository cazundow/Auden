import React from 'react'; 

const SearchResults = ({items, setShow, setModalData}) => {

   
    if(!items){
        return null
    }
    else{
    return(
            items.map( (item, i) =>
            <tr className='pointer' key={item.id} id={item.id} onClick={() => {setModalData(item); setShow(true)}}>
                <th scope="row">{i + 1}</th>
                <td> 
                <p key={i}>{item.name}</p>
                </td>
                <td> <p>{item.forks_count}</p></td>
                <td> <p>{item.open_issues_count}</p></td>
            </tr>
            )
        
    )
    }
}

export default SearchResults ;