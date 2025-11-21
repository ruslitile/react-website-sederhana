import '../styles/Partners.css'
import { PartnerSection, partnersList } from "../data/PartnerSection"
import parse from 'html-react-parser';
function Partner(props) {
  return (
    <section id="partners">
            <div className="tengah">
                <div className="kolom">
                 {parse(PartnerSection.content)}
                </div>

                <div className="partner-list">
                    {
                        props.partnersList.map((item,index) => {
                            return(
                                <div className="kartu-partner" key={index}>
                                    <img src={item.Image} alt="Partner Logo" />
                                </div>
                            )
                    }
                    )
                    }
                </div>
            </div>
        </section>
   
  )
}

export default Partner
