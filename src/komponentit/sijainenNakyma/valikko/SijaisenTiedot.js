import React, { Component } from 'react';
import { haeSijaisenTiedot } from '../../../restpalvelu';


// Täällä haetaan sijaisen omat tiedot. Tällä hetkellä hakee kaikkien sijaisten kaikki tiedot. 
class SijaisenTiedot extends Component {
    constructor(props) {
        super(props);
        this.state = {sijaisentiedotdata: []};
    }
    componentDidMount () {
        this.haekaikki();
    }
    haekaikki() {
        haeSijaisenTiedot(this.kaikkihaettu);
    }
    kaikkihaettu = (haettudata, virhe) => {
        if(virhe) {
            alert("virhe");
        } else {
            this.setState({sijaisentiedotdata: haettudata});
      
        }
    }
    handlaamuokkaus = (e) => {
        this.props.history.push('/sijaisenomientietojenmuokkaus/'+ e.target.value);
        };

    //Täällä mapataan data
    render() {
        var sijaisentiedotolio = this.state.sijaisentiedotdata.map((sijaisentiedotmappi) => {
            if (sijaisentiedotmappi && sijaisentiedotmappi.sijainenId){
            return <li key={sijaisentiedotmappi.sijainenId}>
            
            Nimi: {sijaisentiedotmappi.sijainenNimi} <li>Osoite: {sijaisentiedotmappi.sijainenOsoite}</li> <li>Yhteystiedot: {sijaisentiedotmappi.sijainenPuhelinnumero}, {sijaisentiedotmappi.sijainenSahkoposti}</li>
            <button type="button"
                            value={sijaisentiedotmappi.sijainenId} onClick={this.handlaamuokkaus}>Muokkaa tietoja</button>
                    </li>
            
            }
        })
    //ja näytetään se sivustolla:
        return (    
            <ul>
                {sijaisentiedotolio}
            </ul>
        );
        
    }
    }

export default SijaisenTiedot;