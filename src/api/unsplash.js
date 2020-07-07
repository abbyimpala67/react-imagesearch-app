import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID sMPDevQdMhCtFpqHygq-4cCbpEuuP3__FwLe-IUeXOs",
  },
});
