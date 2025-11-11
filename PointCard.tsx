import React from "react";
import "../../theme/companyCard.css";

interface PointCardProps {
  titulo: string;           // p.ej. "Salchipapas"
  description: string;          // p.ej. "Daniela"
  date: string;        // p.ej. "La Mejor Empresa De Salchipapa"
  status: string;            // p.ej. "Mi Empresa" o "Entrar"

}

const PointCard: React.FC<PointCardProps> = ({
  titulo, description, date, status, onClick
}) => {
  return (
    <div className="company-card">
      <div className="company-card-body">
        <h3 className="company-card-title">{titulo}</h3>
        <p className="company-card-owner">{description}</p>
        <p className="company-card-tagline">“{date}”</p>
        <p className="company-card-tagline">“{status}”</p>
      </div>
    </div>
  );
};

export default PointCard;
