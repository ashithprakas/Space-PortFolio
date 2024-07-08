import { FC, useEffect } from "react";
import { TimeLineTemplate } from "../../enumerations/ExperienceTimeline.enum";
import "./ExperienceTimeline.css";

const Timeline: FC<{ timeLineTemplate: TimeLineTemplate[] }> = ({
  timeLineTemplate,
}) => {
  useEffect(() => {
    const timeLineEnrtyElements = document.querySelectorAll(
      ".timeline-entry-hidden"
    );

    console.log(timeLineEnrtyElements);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-entry-show");
          } else {
            entry.target.classList.remove("timeline-entry-show");
          }
        });
      },
      { threshold: 0.7, rootMargin: "-50px" }
    );
    timeLineEnrtyElements.forEach((element) => {
      console.log("observing element ", element);
      observer.observe(element);
    });

    return () => {
      console.log("unobserving items");
      timeLineEnrtyElements.forEach((item) => observer.unobserve(item));
    };
  }, [timeLineTemplate]);

  return (
    <div>
      <div className="responsive-timeline-container">
        <div className="timeline">
          <ul className="timeline-container">
            {timeLineTemplate.map((template, index) => {
              return (
                <li key={index} className="timeline-entry-hidden">
                  <h3 className="title">{template.Title}</h3>
                  <p>{template.Description}</p>
                  <span className="circle"></span>
                  <span className="date">{template.Date}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
