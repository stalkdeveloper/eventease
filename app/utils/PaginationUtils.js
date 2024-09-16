const getPagination = (query, defaultLimit = 50) => {
    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || defaultLimit;
    const skip = (page - 1) * limit;
    return { page, limit, skip };
};

module.exports = getPagination;
