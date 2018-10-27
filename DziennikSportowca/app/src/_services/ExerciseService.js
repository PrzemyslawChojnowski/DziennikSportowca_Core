import axios from "axios";
import config from "config";

const routePrefix = config.apiUrl + "/exercise";

const returnData = r => r.data;

class ExerciseService {
    /** Create exercise */
    static create(model) {
        return axios.post(`${routePrefix}`, model);
    }

    /** Get exercise */
    static get(id) {
        return axios.get(`${routePrefix}/${id}`).then(returnData);
    }

    /** Update exercise */
    static update(model) {
        return axios.put(`${routePrefix}`, model);
    }

    /** Delete exercise */
    static delete(id) {
        return axios.delete(`${routePrefix}/${id}`);
    }
}

export default ExerciseService;
