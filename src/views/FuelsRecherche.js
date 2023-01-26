import React, {useEffect, useState, useRef} from "react";
import axios from "axios";

const URL = `https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=&rows=10000&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=com_arm_name&facet=epci_name&facet=dep_name&facet=reg_name&facet=services_service&facet=horaires_automate_24_24&refine.ville=`;

const FuelsRecherche = () => {

    const [data, setData] = useState([]);
    const refCity = useRef();
   
    const getFuelsCity = async () => {
        const enteredCityMaj = refCity.current.value.toUpperCase();
        const fullUrl = URL.concat('', enteredCityMaj);
        return axios
            .get(fullUrl)
            .then((res) => setData(res.data.records));  
    }
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        await getFuelsCity();
    };

    return(
    <>
        <form className="container" >
            <div className="form-group">
                <label htmlFor="ville">Ville</label>
                <input type="text" id="1" name="city" className="form-control" ref={refCity}></input>
            </div>
            <div className="form-group">
                <button onClick={handleSubmit} className="btn btn-primary">Rechercher</button>
            </div>
        </form>
            {data
            .map((val, index) => {
                return(
                    <li key={index}><span>{'ADRESSE: '}</span>{val.fields.adresse}<span>{' VILLE: '}</span>{val.fields.ville}<span>{' TYPE: '}</span>{val.fields.prix_nom}<span>{' PRIX/L: '}</span>{val.fields.prix_valeur}</li>
                );
            })}
    </>   
    );
}

export default FuelsRecherche;

