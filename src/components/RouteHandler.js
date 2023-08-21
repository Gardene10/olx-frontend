import React from "react";
import { Navigate } from "react-router-dom";
import { isLogged } from "../utils/authHandler";  // make sure if the user is logged

export const RouteHandler = ({children, ...routeProps}) => {// o routeProps faz referência aos "atributos" da rota especificada
    let logged = isLogged()  // make sure if the user is logged
    let authorized = (routeProps.private && !logged) ? false : true;//if a screen is private and the user is no logged I'm not authorized if any other situation I'm authorized.
   return authorized ? children : <Navigate to="/signin"/> // if  I'm authorized return if no redirect to login 
}