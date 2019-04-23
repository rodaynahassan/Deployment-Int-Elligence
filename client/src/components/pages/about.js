import React from "react";
import { MDBCard, MDBCardTitle, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import back from '../../backkk.jpeg'
import pillar from '../../pillars.jpeg'
import first from '../../1stt.jpeg'
import second from '../../2ndd.jpeg'
import third from '../../3rdd.jpeg'

const CardExample = () => {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src={third} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h3">Who We Are</MDBCardTitle>
          <MDBCardText>
          GAFI is an affiliate of the Ministry of Investment (MOI) 
          and the principal government body regulating and facilitating investment in Egypt.
          As Egypt's one-stop shop for investment, GAFI eases the way for global investors looking to harness opportunities presented by Egypt's fast-growing domestic economy 
          and the nation's robust competitive advantages as an export hub for Europe, the Arab world and Africa.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={second} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h3">Our Mission</MDBCardTitle>
          <MDBCardText>
          "To enable and sustain Egypt's economic growth through investment promotion, facilitation, 
          efficient business services and advocacy of investor friendly policies "
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src={first} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h3">Five Main Pillars</MDBCardTitle>
          <MDBCardText>
          The promotion of Egypt's potential sectors to attract foreign investment, reinvestments and expansions.
          The stimulation of domestic investment.
          The development of investment services.
          The management of free zones and development of investment zones to accelerate the expansion of competitive strategic clusters.
          Institutional development support to entrepreneur-ship and stimulating the development of innovation.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}

export default CardExample;