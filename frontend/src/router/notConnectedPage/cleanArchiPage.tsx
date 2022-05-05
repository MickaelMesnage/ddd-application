import React, { FC } from "react";
import Layout from "../../UI/layout";

const CleanArchiPage: FC = () => (
    <Layout>
        <h1>Clean architecture</h1>
        <h2>A quoi ca sert de se prendre la tête à faire une clean architecture ?</h2>
        <p>
            La clean architecture va avoir plusieurs avantages selon moi :
            <ul>
                <li>
                    la segmentation du code va permettre au dev de créer des tests unitaires lui
                    évitant des regressions tout au long de la vie du projet
                </li>
                <li>
                    l&apos;abstraction forte va permettre au dev de séparer le fonctionnel de la
                    technique : si à un moment il y a besoin de changer la brique &quot;envoi de
                    mail&quot;, alors le changement est très simple et très sure
                </li>
                <li>
                    une partie du code comme les uses cases sont compréhensibles pour des gens non
                    initiés au code : même sans specs rédigées, un non developpeur pourra comprendre
                    ce que fait l&apos;application&apos;
                </li>
            </ul>
        </p>
        <p>
            Ressources utilisées pour les problématiques ddd :
            <ul>
                <li>
                    <a
                        href="https://medium.com/game-development-stuff/ddd-hexagonal-architecture-and-frontend-what-is-this-all-about-e1568a9053c4"
                        target="_blank"
                        rel="noreferrer">
                        Partie front
                    </a>
                </li>
                <li>
                    <a
                        href="https://blog.octo.com/architecture-hexagonale-trois-principes-et-un-exemple-dimplementation/"
                        target="_blank"
                        rel="noreferrer">
                        Partie back
                    </a>
                </li>
            </ul>
        </p>
    </Layout>
);

export default CleanArchiPage;
