import React from 'react';
import { useEffect, useState} from 'react';
import { ProjectList } from '../ProjectList/ProjectList';
import "./Projects.scss";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {
    FullStack,
    Frontend,
    Backend,
    designPortfolio,
    contentPortfolio,
  } from "../../data";
  



const Projects = () => {


    const [selected, setSelected] = useState("fullstack");
    const [data, setData] = useState([]);

    const list = [
      {
        id: "fullstack",
        title: "FullStack",
      },
      {
        id: "frontend",
        title: "Frontend",
      },
      {
        id: "backend",
        title: "Backend",
      },
      
    ];




    useEffect(() => {
        switch (selected) {
          case "fullstack":
            setData(FullStack);
            break;
          case "frontend":
            setData(Frontend);
            break;
          case "backend":
            setData(Backend);
            break;
          default:
            setData(FullStack);
        }
      }, [selected]);



  return (
    <div className="projects" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
            title={item.title}
            active={selected === item.id.toLowerCase()}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            <a className='profolio-links' href={d.link} target="_blank">
                <p>Live<ArrowOutwardIcon/></p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects