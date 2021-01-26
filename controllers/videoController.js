import routes from "../routes";
import Video from "../models/Video";

// await 비동기 처리 후, 렌더링
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    // home 템플릿에 videos 전달
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    // 에러일땐, video를 가져오지 못하니 빈 배열을 넘김
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  // const searchingBy = req.query.term; // Before ES6
  const {
    query: { term: searchingBy }
  } = req;
  // searchingBy: searchingBy
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  
  const newVideo = await Video.create({ 
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    // 정보를 찾아 videoDetail 템플릿에 video 정보를 전달
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    res.redirect(routes.home);  // video 정보가 없을 때, redirect
  }
};

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });