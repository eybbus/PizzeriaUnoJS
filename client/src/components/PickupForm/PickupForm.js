import React from 'react';
import TextInput from '../TextInput/TextInput';
import toastr from 'toastr';
import validator  from 'validator';

const initialState = {
    fields: {
        fullName: '',
        telephone: '',
    }
};

class PickupForm extends React.Component {
    constructor(props) {
        super(props);
        var storeUserInfo;
        if (JSON.parse(localStorage.getItem('userInfo'))) {
            storeUserInfo = { fields: JSON.parse(localStorage.getItem('userInfo')) };
        } else {
            storeUserInfo = null;
        }
        this.state = storeUserInfo || initialState;
    };
    onInput(e) {
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    };
    onFormSubmit(e) {
        e.preventDefault();
        const { fullName, telephone } = this.state.fields;
        if (fullName === '' || !validator.isNumeric(telephone)) { return false; }
        console.log(this.state.fields);
        this.setState(initialState);
        toastr.success('Form was successfully submitted', 'Success!');
        localStorage.setItem('userInfo', JSON.stringify(this.state.fields));
        this.props.temp();
    }

    validTelephone(val) {
        if(!val) {
            return '*Telephone is required';
        } else if (!validator.isNumeric(val)) {
            return '*May Only contain numbers';
        } else {
            return '';
        }
    }

    render() {
        const { fullName, telephone } = this.state.fields;
        return (
            <div>
                <h1>Pickup Info</h1>
                <form action="" method="get" onSubmit={(e) => this.onFormSubmit(e)}>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        label="Full Name"
                        name="fullName"
                        value={fullName}
                        validate={val => !val ? '*Full name is required' : ''} />
                    <TextInput
                        onChange={e => this.onInput(e)}
                        label="Telephone"
                        name="telephone"
                        value={telephone}
                        validate={(val) => this.validTelephone(val)} />
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
        )
    };
};

export default PickupForm;