//import the boostrap compents we will be using on this form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';

function AppointmentForm({ handleChange, handleSubmit, formData, handleDateChange}) {

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
                    <Form.Control as="select" defaultValue="1" required minLength="2" onChange={handleChange} value={formData.appointmentGroomer} type="text" placeholder="Groomer Name" >
                        <option>Choose your Groomer</option>
                        <option>All Clean Ashley</option>
                        <option>Do it all Deb</option>
                        <option>Groomer Gabe</option>
                        <option>Tailwag Todd</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="appointmentServices">
                    <Form.Label><strong>Service:</strong></Form.Label>
                    <Form.Control as="select" defaultValue="1" required minLength="2" onChange={handleChange} value={formData.appointmentServices} type="text" placeholder="Name of Service" >
                        <option>Choose your Service</option>
                        <option>Body Art</option>
                        <option>Ear Cleaning</option>
                        <option>Facial</option>
                        <option>Hairless waxing</option>
                        <option>Hair/Skin coloring</option>
                        <option>Mani/Pedi</option>
                        <option>Massage</option>
                        <option>Moisturize</option>
                        <option>Teeth/Fang cleaning</option>
                        <option>Wash, Dry and Brush</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="appointmentLocation">
                    <Form.Label><strong>Location:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.appointmentLocation} type="text" placeholder="Location" />
                </Form.Group>
                <Form.Group controlId="appointmentDate">
                    <Form.Label><strong>Date:</strong></Form.Label>
                    <DatePicker showTimeSelect selected={formData.appointmentDate} onChange={handleDateChange} dateFormat="yyyy/MM/dd hh:mm"/>
                </Form.Group>
                <Form.Group controlId="appointmentTime">
                    <Form.Label><strong>Time:</strong></Form.Label>
                    <DatePicker showTimeSelect selected={formData.appointmentTime} onChange={handleDateChange} dateFormat="yyyy/MM/dd hh:mm"/>
                </Form.Group>

                <Button variant="outline-primary" type="submit" className="scheduleApptButton">
                    Schedule Appointment
                </Button>
            </Form>
        </div>
    )

}

export default AppointmentForm
