import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../theme/companyCard.css";

export interface PointFormValues {
  title: string;
  description: string;
  date: string; 
  status: string; 
}

interface PointFormProps {
  onSubmit?: (values: PointFormValues) => void;
}

const PointForm: React.FC<PointFormProps> = ({ onSubmit }) => {
  const history = useHistory();

  const [title, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const values: PointFormValues = { title, description, date, status };

    onSubmit?.(values);
    console.log("✅ Mostrar punto ->", values);

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      history.push("/companies_entrepreneurs");
    }, 1300);
  };

  return (
    <>
      <form className="company-form" onSubmit={handleSubmit}>

        <input
          className="pill-input"
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="pill-input pill-textarea"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />

        
        <input
          className="pill-input"
          type="text"
          placeholder="Fecha"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          className="pill-input"
          type="text"
          placeholder="Estado"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <button type="submit" className="btn-create">
          Crear Punto
        </button>
      </form>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-card">
            <div className="success-check">✓</div>
            <div className="success-text">
              <strong>Punto</strong> <span>Creado</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PointForm;

