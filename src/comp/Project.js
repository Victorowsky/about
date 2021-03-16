const Project = ({link, description, imgLink, projectName}) => {
    return ( 
        <div className="project">
            <div className="img">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={imgLink} alt="Website preview" />
              </a>
            </div>
            <h3 className="projectName">{projectName}</h3>

            <div className="description">
              {description}
            </div>
          </div>
     );
}
 
export default Project;
