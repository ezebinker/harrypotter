const totalRegister = async (Model) => await Model.countDocuments();
const findById = async (Model, id) => await Model.findById(id);
const findAll = async (Model, page = 0) => await Model.find()
                                .limit(parseInt(process.env.LIMIT_RESPONSE))
                                .skip(
                                    page === 0 || page === 1 ? 0 : page-1 * process.env.LIMIT_RESPONSE
                                    );

module.exports = { totalRegister, findById, findAll };
