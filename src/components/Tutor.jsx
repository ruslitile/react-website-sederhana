import '../styles/Tutors.css'
import { TutorsSection, tutorsList } from "../data/TutorsSection"
import parse from 'html-react-parser';

function Tutor(props) {
  return (
    <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                   {parse(TutorsSection.content)}
                   
                </div>

                <div className="tutor-list">
                   {
                    props.tutorsList.map((item,index) => {
                      return(
                        <div className="kartu-tutor" key={index}>
                          <img src={item.Image} alt={item.name} />
                          <p>{item.name}</p>
                        </div>
                      )

                    })
                  }
                   
                </div>
            </div>
        </section>
  )
}

export default Tutor
