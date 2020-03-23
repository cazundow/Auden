import React, {useState, useEffect} from 'react'; 
import {Button, Modal} from 'react-bootstrap';
import IssueTable from "./IssueTable";

const DetailsModal = ({modalData, show, handleClose}) => {
    const [issues, setIssues] = useState([]); 
    const [url, setUrl] = useState(""); 

    useEffect(() => {
          getIssues();

    }, [modalData])
    //get the issues
    const getIssues = (async () => {

        console.log(url);
        const response = await fetch(`${modalData.url}/issues`); 
        const data = await response.json();
        setIssues(data);
      })
    return(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>{modalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {modalData.description}
            {
                <IssueTable issues = {issues}/>
            }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
    )
    
}

export default DetailsModal ;