//import the boostrap compents we will be using on this form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function UserForm({ handleChange, handleSubmit, formData, isUpdate }) {

    return (
        <div className="UserForm container">

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                    <Form.Label><strong>First Name:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.firstName} type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label><strong>Last Name:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.lastName} type="text" placeholder="Last Name" />
                </Form.Group>
                <Form.Group controlId="phoneNumber">
                    <Form.Label><strong>Phone Number:</strong></Form.Label>
                    <Form.Control required minLength="10" onChange={handleChange} value={formData.phoneNumber} type="text" placeholder="Phone Number" />
                </Form.Group>
                <Form.Group controlId="streetAddress1">
                    <Form.Label><strong>Street Address1:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.streetAddress1} type="text" placeholder="Street Address1" />
                </Form.Group>
                <Form.Group controlId="streetAddress2">
                    <Form.Label><strong>Street Address2:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.streeAddress2} type="text" placeholder="Stree Address2" />
                </Form.Group>
                <Form.Group controlId="city">
                    <Form.Label><strong>City:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.city} type="text" placeholder="City" />
                </Form.Group>
                <Form.Group controlId="state">
                    <Form.Label><strong>State:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.State} type="text" placeholder="State" />
                </Form.Group>
                <Form.Group controlId="zip">
                    <Form.Label><strong>Zip:</strong></Form.Label>
                    <Form.Control required minLength="2" onChange={handleChange} value={formData.Zip} type="text" placeholder="Zip" />
                    </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label><strong>E-mail:</strong></Form.Label>
                    <Form.Control required onChange={handleChange} value={formData.email} type="email" placeholder="Email" {...(isUpdate && {disabled:true})} />
                    {isUpdate ? <Form.Text muted>E-mail is read-only and cannot be updated from here</Form.Text> : null}
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label><strong>Password</strong></Form.Label>
                    <Form.Control {...(!isUpdate && {required:true})}  onChange={handleChange} value={formData.password} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label><strong>Confirm Password</strong></Form.Label>
                    <Form.Control name="confirmPassword" {...(!isUpdate && {required:true})} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default UserForm
