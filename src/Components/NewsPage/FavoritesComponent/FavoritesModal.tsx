import { Button, Modal } from "react-bootstrap";
import { navbTN } from "../../../assets/style";
import { FavoritesModalProps } from "../../../models/ModalProps";

export function FavoritesModalComponent(props : FavoritesModalProps) {

 
      return(
          <Modal show={props.showModal} onHide={() => props.closeModal()}>
          <Modal.Header closeButton>
            <Modal.Title><b>Your favorites List</b></Modal.Title>
          </Modal.Header>
            <Modal.Body>
            <table className="table" > 
            {/* style={{ marginTop: 20,  maxWidth: "80em", margin: "auto"}} */}
                <thead>
                    <tr>
                        <td><b>Ime event-a</b></td>
                        <td><b>Link </b></td>
                    </tr>
                </thead>
                <tbody>
                  <tr>                    
                            {props.favorites.map((it: any) =>
                                <>
                                  <td>{it.title}</td>
                                  <td>{it.subtitle}</td>
                                </> 
                              )} 
                        
             
                  </tr>
            </tbody>   
        </table> 
                  
              
            </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-light" className='btn' style= {navbTN}>Posalji</Button>
          </Modal.Footer>
      </Modal>
      )
  }
  
  export default FavoritesModalComponent;


{/* <tr>
                    <div className="row">
                          <div className="col-6">                    
                            {props.favorites.map((it: any) =>
                                <h6>{it.title}</h6> 
                              )} 
                          </div>
                          <div className="col-6">
                              <h6>nnn</h6>
                          </div>
                    </div>
                  </tr> */}