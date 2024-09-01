const User =require('../../models/User');
const validationUserInput = async(input, checkEmailUnique = true) => {
    const errors = {};
    const requiredFields = ['name', 'username', 'email', 'dateofbirth', 'password'];
    requiredFields.forEach(field => {
        if(!input[field]){
            if(!errors[field]){
                errors['field'] = [];
            }
            errors[field].push(`The ${field} field is required.`);
        }
    });

    if (input.email && !/\S+@\S+\.\S+/.test(input.email)) {
        if(!errors.email){
            errors.email = [];
        }
        errors.email.push('The email formate is invalid.');
    }

    if(checkEmailUnique && input.email && await isEmailTaken(input.email)){
        if (!errors.email) {
            errors.email = [];
        }
        errors.email.push('The email address is already in use.');
    }

    return {
        errors: errors
    };
};

const isEmailTaken = async(email) => {
    const user = await User.findOne({ email });
    return !!user;
};

module.exports = {
    validationUserInput
};