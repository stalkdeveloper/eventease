const validationUserInput = async (input, checkEmailUnique = true) => {
    const errors = {};
    const requiredFields = ['name', 'username', 'email', 'dateofbirth', 'password'];

    // Check for required fields
    requiredFields.forEach(field => {
        if (!input[field]) {
            if (!errors[field]) {
                errors[field] = [];
            }
            errors[field].push(`The ${field} field is required.`);
        }
    });

    // Validate email format
    if (input.email && !/\S+@\S+\.\S+/.test(input.email)) {
        if (!errors.email) {
            errors.email = [];
        }
        errors.email.push('The email format is invalid.');
    }

    if (checkEmailUnique && input.email && await isEmailTaken(input.email)) {
        if (!errors.email) {
            errors.email = [];
        }
        errors.email.push('The email address is already in use.');
    }

    return {
        errors: errors
    };
};
module.exports = {
    validationUserInput,
};