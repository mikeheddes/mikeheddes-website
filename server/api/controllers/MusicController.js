module.exports = {
  modifyDataForClient: function(data) {
    delete data._id;
    return data
  },
  modifyParamsForFind: function(params) {
    // modify find params
    return params
  },
  modifyParamsForCreate: function(params) {
    if (params.title) {
      params.id = params.title.toLowerCase().replace(/\W+/g, " ").trim().replace(
        /\s+/g,
        "_"
      )
    }
    return params;
  }
};
