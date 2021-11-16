//import the boostrap compents we will be using on this form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppointmentForm({ handleChange, handleSubmit, formData, isUpdate }) {

    return (
        <div className="AppointmentForm container">

            <br></br>
            <h3 className="text-center" >Schedule Appointment</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="appointmentPetName">
                    <Form.Label><strong>Pet:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.appointmentPetName} type="text" placeholder="Pet Name" />
                </Form.Group>
                <Form.Group controlId="appointmentGroomer">
                    <Form.Label><strong>Groomer:</strong></Form.Label>
                    <Form.Control as="select" defaultValue="1">
                        <option>All Clean Ashley</option>
                        <option>Do it all Deb</option>
                        <option>Groomer Gabe</option>
                        <option>Tailwag Todd</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="appointmentServices">
                    <Form.Label><strong>Service:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.appointmentServices} type="text" placeholder="Name of Service" />
                </Form.Group>
                <Form.Group controlId="appointmentDate">
                    <Form.Label><strong>Date:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.appointmentDate} type="text" placeholder="Date" />
                </Form.Group>
                <Form.Group controlId="appointmentTime">
                    <Form.Label><strong>Time:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.appointmentTime} type="text" placeholder="Time" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Schedule Appointment
                </Button>
            </Form>
        </div>
    )

}

export default AppointmentForm
