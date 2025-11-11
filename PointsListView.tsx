// src/pages/Home.tsx
import React from 'react';
import HomeLayout from '../layout/HomeLayout';
import Home_entrepreneur from '../components/Home_ entrepreneur';

const PointListView: React.FC = () => (
    <HomeLayout
        backTo="/login"
        heroImages={[
            "/assets/hamburguesa.png",
            "/assets/reloj.png",
            "/assets/zapato.png",
        ]}
        heroImageSrc="/assets/hamburguesa.png"
        logoSrc="/assets/logo_blanco.png"
        title="Lo mejor de nuestros"
        titleHighlight="estudiantes"
        titleAfter="en un solo lugar"

    >
        import React, {useEffect, useState} from "react";
        import {useHistory} from "react-router-dom";
        import CategoryCard from "./Cards/CategoryCards";
        import {categoryService} from "../api/AuthService";


        interface Category {
            _id: string;
        name: string;
        url: string;
}

const Home_entrepreneur: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
        const history = useHistory();

  // Maneja clic en cada categoría
  const handleCategoryClick = (category: string) => {
            console.log(`Entrando a ${category}`);
        history.push("/companies_entrepreneurs");
  };

  // Actualización automática sin recargar página
  useEffect(() => {
    const fetchCategories = () => {
            categoryService
                .getAll()
                .then((res) => {
                    console.log("📦 Categorías recibidas:", res.data);
                    setCategories(res.data);
                })
                .catch((err) => console.error("Error al cargar categorías", err));
    };

        fetchCategories(); // 🔹 Llamada inicial
        const interval = setInterval(fetchCategories, 1000); // 🔹 Actualiza cada 5s

    return () => clearInterval(interval); // 🔹 Limpieza al desmontar
  }, []);

        return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "20px",
                marginTop: "45px",
            }}
        >
            {categories.map((cat) => (
                <CategoryCard
                    key={cat._id}
                    imageSrc={cat.url}
                    name={cat.name}
                    onClick={() => handleCategoryClick(cat.name)}
                />
            ))}
        </div>
        );
};

        export default Home_entrepreneur;


    </HomeLayout>
);

export default PointListView;
