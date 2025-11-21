import { CoursesSection } from "../data/CoursesSection"
import parse from 'html-react-parser';
function Courses() {
  return (
     
        <section id="courses">
            <div className="kolom">
                {parse(CoursesSection.content)}
            </div>
           <img src={CoursesSection.Image}/>
        </section>
  )
}

export default Courses
