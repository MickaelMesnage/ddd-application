import React, { FC } from "react";
import Layout from "../../UI/layout";

const HomePage: FC = () => (
    <Layout>
        <h1>Accueil</h1>
        <h2>Pourquoi ce repo</h2>
        <p>
            Ce repository github est un exemple d&apos;architecture ddd d&apos;une application web
            Node/ReactJS.
        </p>
        <p>
            <a
                href="https://github.com/MickaelMesnage/ddd-application"
                target="_blank"
                rel="noreferrer">
                Lien du repository
            </a>
        </p>
        <p>
            On utilise dans ce projet :
            <ul>
                <li>l&apos;infrastructure Express coté backend</li>
                <li>le gestionnaire de state Redux coté frontend</li>
                <li>typescript sur l&apos;ensemble de l&apos;application</li>
                <li>le linter eslint et prettier</li>
                <li>express-session pour l&apos;authentification via cookie</li>
                <li>jest pour le test (il reste pas mal de tests à écrire</li>
            </ul>
        </p>
        <p>
            Il pourrait être cohérent de rajouter :
            <ul>
                <li>joi pour gérer la validation des données entrantes cotés back</li>
                <li>cypress pour faire du test end-to-end</li>
                <li>...</li>
            </ul>
        </p>
        <h2>Comment utiliser l&apos;application</h2>
        <p>
            L&apos;application est toute simple : les utilisateurs vont constituer leur todo list.
        </p>
        <p>
            Il y a deux types d&apos;utilisateurs :
            <ul>
                <li>
                    Admin qui peuvent:
                    <ul>
                        <li>créer, modifier, supprimer des utilisateurs</li>
                        <li>consulter et modifier leur liste de todo</li>
                        <li>consulter la liste de todo des autres utilisateurs</li>
                    </ul>
                </li>
                <li>
                    Utilisateur simple qui peuvent:
                    <ul>
                        <li>consulter et modifier leur liste de todo</li>
                    </ul>
                </li>
            </ul>
        </p>
        <p>
            Par défaut, il existe un seul utilisateur admin dont l&apos;email est admin@gmail.com
            que vous pouvez utiliser pour créer de nouveaux utilisateurs. Dans cette v0, il n&apos;y
            a pas de mot de passe.
        </p>
        <p>
            Coté backend, grâce à la clean architecture, vous pouvez choisir qui drive et qui est
            driven grâce au fichier .env dans le répertoire backend.
            <p>
                Par exemple, vous pouvez décider que c&apos;est le serveur express qui va controller
                le backend (par l&apos;intermédiaire des appels api du frontend). Ou alors, vous
                pouvez choisir que c&apos;est directement une console dans votre terminal qui vous
                permettra de créer ou consulter une todolist (travail en cours).
            </p>
            <p>
                De la même manière coté driven, vous pouvez choisir que les todos ou les users sont
                sauvegardés sur le file system, dans une base de données ou même directement en
                mémoire du serveur (non persité du coup)
            </p>
        </p>
    </Layout>
);

export default HomePage;
