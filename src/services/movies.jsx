import axios from "axios";

class MovieDataService {
  hostUrl = "http://localhost:10000/api/v1/movies";

  getAll(page = 0) {
    return axios.get(`${this.hostUrl}?page=${page}`);
  }

  get(id) {
    return axios.get(`${this.hostUrl}/id/${id}`);
  }

  find(query, by = "title", page = 0) {
    return axios.get(`${this.hostUrl}?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return axios.post(`${this.hostUrl}/review`, data);
  }

  updateReview(data) {
    return axios.put(`${this.hostUrl}/review`, data);
  }

  deleteReview(id, userId) {
    return axios.delete(`${this.hostUrl}/review`, {
      data: { review_id: id, user_id: userId },
    });
  }

  getRatings() {
    return axios.get(`${this.hostUrl}/ratings`);
  }
}

export default new MovieDataService();
