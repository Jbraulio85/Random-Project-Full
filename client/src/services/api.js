import axios from "axios";

const ip = "40.233.20.158";

const apiClient = axios.create({
    baseURL: `https://${ip}/randomProject/v2`,
    timeout: 5000
});

export const assignProjectByStudentId = async (studentId) => {
    try {
        const response = await apiClient.post('/getMyProject', { studentId });
        return response.data;
    } catch (e) {
        if (e?.response?.data) {
            return e.response.data;
        }
        return {
            success: false,
            message: 'Error de conexión. Por favor intente de nuevo.',
            error: 'Network Error'
        };
    }
}

