import React, { useEffect, useState } from "react";
import arrowW from '../image/arrowW.png';
import arrowP from '../image/ArrowP.png';

function CardExperience({data}:any) {

    const [dataExperience, setDataExperience] = useState<any>({});

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setDataExperience(data)
    },[data])


    return (

        <div className="card-experience md:px-[20px] 2md:px-[20px] lg:px-[20px] xl:px-[20px] 2xl:px-[20px] rounded-[10px] pt-[20px] md:pb-[15px] 2md:pb-[25px] pb-[38px] w-[100%] md:hover:bg-[#1B1B1B] 2md:hover:bg-[#1B1B1B] lg:hover:bg-[#1B1B1B] xl:hover:bg-[#1B1B1B] 2xl:hover:bg-[#1B1B1B]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-card-experience">
                <div className="time-experience text-[#9B9B9B] text-[14px] md:text-[12px] 2md:text-[13px] lg:text-[13px] xl:text-[15px]">{dataExperience.time}</div>
                <div className="all-experience">
                    <div className="detail-experience pb-[12px] flex items-end gap-[15px]">
                        <div className={isHovered ? "experience-hover" : "experience-not-hover"}>
                            <span className="break-word text-[14px] md:text-[12px] 2md:text-[13px] lg:text-[13px] xl:text-[15px]">{dataExperience.job} · <span> </span>
                                <span className={isHovered ? "inline-flex gap-[10px]" : "inline-flex items-baseline gap-[10px]"}>{data.company}
                                    <img src={isHovered ? arrowP : arrowW} alt="" className="w-[8px] h-[8px] lg:w-[8px] lg:h-[8px] xl:w-[10px] xl:h-[10px]" />
                                </span>
                            </span>
                        </div>

                    </div>

                    <div className="pb-[25px] text-[#9B9B9B] text-[13px] md:text-[12px] 2md:text-[13px] lg:text-[12px] xl:text-[15px]">{data.jobDescription}</div>
                    <div className="skill-experience">
                        {dataExperience?.skill?.map((item: any, index: any) =>
                        (
                            <div className="w-fit h-[28px] px-[10px] md:px-[8px] 2md:px-[12px]  g:px-[12px] xl:px-[15px] flex justify-center items-center rounded-[20px] bg-[#4B1919]" key={index}>
                                <p className="text-[#CD6767] text-[13px] md:text-[10px] 2md:text-[11px] lg:text-[11px] xl:text-[15px]">{item}</p>
                            </div>
                        )
                        )}
                    </div>


                </div>
            </div>
        </div>
    );


}

export default CardExperience;
