import React from "react";
import './styles.css';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/8106520?s=460&u=6dc1b83eb03722debe3fc33399a054274ba554aa&v=4" alt="Caio Louro" />
                <div>
                    <strong>Caio Louro</strong>
                    <span>Psicologia</span>
                </div>
            </header>

            <p>Especialista com conhecimento de causa nas loucuras criativas, introversão e alinhamento da personalidade com objetivos de vida.</p>

            <footer>
                <p>Preço/hora <strong>R$ 1.000,00 (flexível)</strong></p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp" />Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;