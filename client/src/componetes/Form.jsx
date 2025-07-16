import { useState } from "react";
import { useAssignPro } from "../hooks/useAssignPro";
import { Pegro } from "./Pegro";
import toast from "react-hot-toast";

export const Form = () => {
  const [studentId, setStudentId] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { getProject } = useAssignPro();

  const handleInputChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleButtonClick = async () => {
    if (studentId.trim() === "" || studentId.length !== 7) {
      setStudentId("");
      return toast.error("Por favor ingrese un número de carnet válido.", {
        style: {
          border: "1px solid #A82020",
          padding: "16px",
          color: "#A82020",
        },
        iconTheme: {
          primary: "#A82020",
          secondary: "#FFFAEE",
        },
      });
    }

    setIsLoading(true);

    const projectPromise = getProject(studentId);
    const minTimePromise = new Promise(resolve => setTimeout(resolve, 1000));
    const [result] = await Promise.all([projectPromise, minTimePromise]);

    setIsLoading(false); 

    if (result.success) {
      toast.success(result.toastMessage, {
        style: {
          border: '1px solid #149854',
          padding: '16px',
          color: '#149854',
        },
        iconTheme: {
          primary: '#149854',
          secondary: '#FFFAEE',
        },
      });
      handleSuccess(result.message);
    } else {
      toast.error(result.toastMessage, {
        style: {
          border: "1px solid #A82020",
          padding: "16px",
          color: "#A82020",
        },
        iconTheme: {
          primary: "#A82020",
          secondary: "#FFFAEE",
        },
      });
      setStudentId("");
    }
  };

  const handleSuccess = (message) => {
    setSuccessMessage(message);
    setShowSuccessMessage(true);
    setStudentId("");
  };

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="flex justify-center">
          <Pegro />
        </div>
      ) : !showSuccessMessage ? (
        <>
          <h1 className="text-3xl font-bold mb-4">
            Bienvenido al Generador de Proyectos
          </h1>
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-sm font-medium">
              Ingresa tu # de Carnet
            </label>
            <input
              type="text"
              id="studentId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="# de Carnet"
              value={studentId}
              onChange={handleInputChange}
              pattern="\d*"
              inputMode="numeric"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleButtonClick}
            >
              Obtener Proyecto
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-green-600">
            ¡Éxito!
          </h1>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <pre className="whitespace-pre-line text-gray-800 text-sm leading-relaxed">
              {successMessage}
            </pre>
          </div>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => {
              setShowSuccessMessage(false);
              setSuccessMessage("");
            }}
          >
            Asignar otro proyecto
          </button>
        </div>
      )}
    </div>
  );
};
