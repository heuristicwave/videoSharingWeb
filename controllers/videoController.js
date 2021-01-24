export const home = (req, res) => {
  //- home template에 videos 전달
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  //- const searchingBy = req.query.term; // Before ES6
  const {
    query: { term: searchingBy }
  } = req;
  //- searchingBy: searchingBy
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });