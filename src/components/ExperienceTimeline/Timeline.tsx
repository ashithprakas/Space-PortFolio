import { FC, useEffect, useState } from "react";
import { TimeLineTemplate } from "../../enumerations/ExperienceTimeline.enum";

const Timeline: FC<{ timeLineTemplate: TimeLineTemplate[] }> = ({
  timeLineTemplate,
}) => {
  const [containerHeight, setContainerHeight] = useState(0);
  useEffect(() => {
    const timeLineEnrtyElements = document.querySelectorAll(
      ".timeline-entry-hidden"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-entry-show");
          } else {
            entry.target.classList.remove("timeline-entry-show");
          }
        });
      },
      { threshold: 0.2, rootMargin: "-100px" }
    );
    timeLineEnrtyElements.forEach((element) => {
      setContainerHeight(
        containerHeight + element.getBoundingClientRect().height
      );
      observer.observe(element);
    });

    return () => {
      timeLineEnrtyElements.forEach((item) => observer.unobserve(item));
      setContainerHeight(0);
    };
  }, [timeLineTemplate]);

  return (
    <div>
      <div className="responsive-timeline-container">
        <div className="timeline">
          <ul
            className="timeline-container"
            style={{ height: containerHeight }}
          >
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
