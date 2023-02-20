
import { Button, Modal } from "react-bootstrap";
import { navbTN, sendbTN } from "../../assets/style";
import { ModalComponentProps } from "../../models/ModalProps";
import useFormikHandler from "../../models/ValidationModal"; 
import { validationErrorsStyle } from "../../assets/style";
import { ErrorMessage } from "formik";
import { ReactNode } from "react";

export type ErrorMessageProps = {
  msg: ((errorMessage: string) => ReactNode) | undefined;
  children?: JSX.Element|JSX.Element[]; 
}

export function ModalComponent(props : ModalComponentProps) {

  const formik = useFormikHandler(); 
    return(
        <Modal show={props.showModal} onHide={() => props.closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title><b>Postanite clan OAK NS tima</b></Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <form onSubmit = {formik.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Ime</label>
                  <input type="name"  id="exampleName" name= "name"
                    className="form-control"
                    onChange={formik.handleChange}
                    onBlur = {formik.handleBlur}
                    value =  {formik.values.name}
                  />
                  <br/>
                  <br/>
                  {/* <ErrorMessage name="email" render={msg => <div>{msg}</div>} /> */}
                  
                {formik.touched.name && formik.errors.name ? (<div style = {validationErrorsStyle} >{formik.errors.name}</div>) : null}
                  
                </div>
                
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Prezime</label>
                  <input type="surname" className="form-control" id="exampleSurname" 
                    onChange={formik.handleChange}
                    onBlur = {formik.handleBlur}
                    value =  {formik.values.surname}/>
                   <br />
                   <br />
                   {formik.touched.surname && formik.errors.surname ? (<div style = {validationErrorsStyle} >{formik.errors.surname}</div>) : null}
                </div>
                <br />
                <br />

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email adresa</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    onChange={formik.handleChange}
                    onBlur = {formik.handleBlur}
                    value =  {formik.values.email}  
                  />
                  {formik.touched.email && formik.errors.email ? (<div style = {validationErrorsStyle} >{formik.errors.email}</div>) : null}
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <br />
                <br />
            </form>
          </Modal.Body>
        <Modal.Footer>
          <Button  className='btn btn-success'>Posalji</Button>
        </Modal.Footer>
    </Modal>
    )
}

export default ModalComponent;