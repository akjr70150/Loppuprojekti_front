import React, {Component }from "react";
import Popup from 'reactjs-popup';
import KaikkiToimeksiannot from "./KaikkiToimeksiannot";
import SijaisenToimeksiannot from "./SijaisenToimeksiannot";
import SijaisenTiedot from "./SijaisenTiedot";
import SijaisenTietojenMuokkaus from './SijaisenTietojenMuokkaus'

// Tämä valikko tulee näkyviin, kun hampurilaista klikataan.
export default class Valikko extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sijaisenNakyma: false,
            id : undefined
        }
    }

    muokkaus = (id) => {
        this.setState({
            sijaisenNakyma: !this.state.sijaisenNakyma,
            id:id

        })
    }

    render() {
        return   (
            <div className="menu">
              <ul>
                {/* <li onClick={close}>Omat sijaisuudet</li>
                <li onClick={close}>Näytä kaikki vapaat sijaisuudet</li>
                <li onClick={close}>Omat tiedot</li> */}
              
              {/* Näissä alla olevissa linkeissä valikon sulkeminen (onClick={close}) ei toimi*/}
                  <Popup trigger={<li onClick={this.props.close}>Omat sijaisuudet</li>} modal closeOnDocumentClick>
                      <span> Omat sijaisuudet: </span>
                      {/* Tähän täytyy laittaa ehtolause (jos lista tyhjä, mitä näytetään) */}
                      <SijaisenToimeksiannot/>
                  </Popup>
          
                  <Popup trigger={<li onClick={this.props.close}>Näytä kaikki vapaat sijaisuudet</li>} modal closeOnDocumentClick>
                      <span> Kaikki vapaat sijaisuudet: </span>
                      {/* Tähän täytyy laittaa ehtolause (jos lista tyhjä, mitä näytetään) */}
                      <KaikkiToimeksiannot/>
                  </Popup>
          
                  <Popup trigger={<li onClick={this.props.close}>Omat tiedot</li>} modal closeOnDocumentClick>
                      <span> Tähän sijaisen omat tiedot. </span>
                      {!this.state.sijaisenNakyma &&<SijaisenTiedot history={this.props.history} muokkaus={this.muokkaus}/>}
                      
                      {this.state.sijaisenNakyma && <SijaisenTietojenMuokkaus id={this.state.id} muokkaus={this.muokkaus}/>}
                  </Popup>
              </ul>
            </div>
          );
    }
 }