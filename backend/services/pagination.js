const { totalRegister } = require("../services/common");

const paginationInfo = async ({ req, model }) => {
  try {
    const { baseUrl: endpoint } = req;
    const total = await totalRegister(model);
    console.log(total);
    const moreInfo = {
      prev: null,
      next: null,
    };
    if (total > process.env.LIMIT_RESPONSE) {
      if (req.query.page) {
        const page = parseInt(req.query.page);

        if (page <= 1) {
          moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=${page + 1}`;
        } else {
          moreInfo.prev = `${process.env.BASE_URL}${endpoint}?page=${page - 1}`;
          moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=${page + 1}`;
        }
      } else {
        moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=2`;
      }
    }
    moreInfo.limit = process.env.LIMIT_RESPONSE;
    moreInfo.total = total;
    return moreInfo;

  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = { paginationInfo };
