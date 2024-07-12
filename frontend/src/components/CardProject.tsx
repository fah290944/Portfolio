import React, { useEffect, useState } from "react";
import arrowW from '../image/arrowW.png';
import arrowP from '../image/ArrowP.png';

function CardProject({data}:any) {

    const [dataProject, setDataProject] = useState<any>({});

    const [isHoveredProject, setIsHoveredProject] = useState(false);

    useEffect(() => {
        setDataProject(data)
    },[data])


    return (
      <div className="card-projects px-[20px] rounded-[10px] pt-[20px] pb-[20px] md:pb-[15px] 2md:pb-[25px] lg:pb-[25px] xl:pb-[38px] 2xl:pb-[38px] w-[100%] 
        md:hover:bg-[#1B1B1B] 2md:hover:bg-[#1B1B1B] lg:hover:bg-[#1B1B1B] xl:hover:bg-[#1B1B1B] 2xl:hover:bg-[#1B1B1B]"
        onMouseEnter={() => setIsHoveredProject(true)}
        onMouseLeave={() => setIsHoveredProject(false)}
      >
        <a href={dataProject.web}>
          <div className="bg-card-projects">
            <img src={dataProject.photo} alt="" className={isHoveredProject ? "img-projects bg-[#B7B7B7] " : "img-projects bg-[#5B5959]"} />
            <div className="all-projects">
              <div className={isHoveredProject ? "detail-projects-hover" : "detail-projects-not-hover"}>
                  <div className="break-words w-fit text-[14px] md:text-[12px] 2md:text-[13px] lg:text-[13px] xl:text-[15px]">{dataProject.nameProject}</div>
                  <div className={isHoveredProject ? "pl-[6px] w-fit" : "pt-[8px] pl-[6px] w-fit"}>
                      <img src={isHoveredProject ? arrowP : arrowW} alt="" className="w-[8px] h-[8px] md:w-[8px] md:h-[8px] 2md:w-[8px] 2md:h-[8px] lg:w-[8px] lg:h-[8px] xl:w-[10px] xl:h-[10px]" />
                  </div>
              </div>

              <div className="break-words md:pb-[5px] pb-[15px] text-[#9B9B9B] text-[13px] md:text-[11px] 2md:text-[12px] lg:text-[12px] xl:text-[15px]">{dataProject?.projectDetails}</div>
              <div className="skill-projects">
              {dataProject?.skill?.map((item: any,index:any) =>
                  (
                      <div className="w-fit h-[28px] md:px-[8px] px-[10px] 2md:px-[11px] lg:px-[12px] xl:px-[15px] flex justify-center items-center rounded-[20px] bg-[#4B1919]" key={index}>
                          <p className="text-[#CD6767] text-[13px] md:text-[11px] 2md:text-[11px] lg:text-[11px] xl:text-[15px]"key={item.id}>{item}</p>
                      </div>
                  )
              )}


              </div>
            </div>
          </div>
        </a>

      </div>

    );


}

export default CardProject;
