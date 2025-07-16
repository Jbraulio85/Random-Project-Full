import { assignProjectByStudentId } from "../services/api";

export const useAssignPro = () => {
  const getProject = async (studentId) => {
    try {
      const responseData = await assignProjectByStudentId(studentId);
      
      if (responseData.success) {
        const { student, project } = responseData.data;
        return {
          success: true,
          message: `¡Proyecto asignado exitosamente!\n\nEstudiante: ${student.name} ${student.surname}\nProyecto: ${project.name}\n\nRevisa tu correo: ${student.email}`,
          toastMessage: responseData.message
        };
      } else {
        return {
          success: false,
          message: null,
          toastMessage: responseData.message
        };
      }
    } catch (error) {
      const errorMessage = 'Error al asignar proyecto. Por favor intente de nuevo.';
      return {
        success: false,
        message: null,
        toastMessage: errorMessage
      };
    }
  }

  return {
    getProject
  }
}
