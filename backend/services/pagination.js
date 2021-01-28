const { totalRegister } = require("../services/common");

const paginationInfo = ({ req, model }) => {
  const { baseUrl: endpoint } = req;
  const total = totalRegister(model);
  const moreInfo = {};
  if (req.query.page) {
    const page = parseInt(req.query.page);

    if (page <= 1) {
      moreInfo.prev = null;
      moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=${page + 1}`;
    } else {
      moreInfo.prev = `${process.env.BASE_URL}${endpoint}?page=${page - 1}`;
      moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=${page + 1}`;
    }
    moreInfo.limit = process.env.LIMIT_RESPONSE;
    moreInfo.total = total; 
  }
  return moreInfo;
};

module.exports = { paginationInfo };
