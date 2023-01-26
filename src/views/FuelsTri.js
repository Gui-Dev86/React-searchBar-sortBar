import React, {useEffect, useState} from "react";
import axios from "axios";

const FuelsTri = () => {

    const [data, setData] = useState([]);
    const [triCity, setTriCity] = useState("");

    useEffect(() => {
        axios
        .get("https://data.economie.gouv.fr/api/records/1.0/search/?dataset=prix-carburants-fichier-instantane-test-ods-copie&q=&rows=10000&facet=id&facet=adresse&facet=ville&facet=prix_maj&facet=prix_nom&facet=com_arm_name&facet=epci_name&facet=dep_name&facet=reg_name&facet=services_service&facet=horaires_automate_24_24")
        .then((res) => setData(res.data.records));
    }, [])
    
    const handleTriCity = (e) => {
        let value = e.target.value;
        value.length > 2 && setTriCity(value);
    }
    
    return(
    <>
        <div>
            <input
                type="text"
                name="triBarCity"
                id="triBarCity"
                placeholder="Taper une ville"
                onChange={handleTriCity}    
            />
        </div>
        <ul>
            {data
            .filter((val) => {
                return val.fields.ville.toLowerCase().includes(triCity.toLowerCase());
            })
            .map((val, index) => {
                return(
                    <li key={index}><span>{'ADRESSE: '}</span>{val.fields.adresse}<span>{' VILLE: '}</span>{val.fields.ville}<span>{' TYPE: '}</span>{val.fields.prix_nom}<span>{' PRIX/L: '}</span>{val.fields.prix_valeur}</li>
                );
            })}
        </ul>
    </>   
    );
}

export default FuelsTri;

