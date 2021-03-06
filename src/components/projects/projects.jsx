import React, { Component } from 'react';
import ProjectListItem from './projectListItem'
import { AwesomeButton } from 'react-awesome-button';


class Projects extends Component {


  render() {

    const {p, i, right} = this.props
    let arrayConversion= Object.entries(p)
    return (
      <div className="animated fadeIn grid-x align-center" id="projItemContainer" style={{background: p.projectBackground}}>
        <div id="projectMainDiv" className="cell grid-x align-center">
          <div className="cell large-5 grid-x align-middle align-center" id="projInfoContainer">
            <div className="cell" style={{padding: '0 0 70px 0', margin: 0, animation: `slideIn${right ? 'Left' : 'Right'} ease-out 1s`}}>
              <h1 id="projHeader" style={{color: p.projectPrimary}} className="projItem" >{p.projectHeader}</h1>
              <h3 id="projSubheader" style={{color: p.projectSecondary}} className="projItem" >{p.projectSubheader}</h3>
              <h4 style={{color: p.projectSecondary}} className="projItem" >{p.projectType}</h4>
              {p.visitProject === '' ? null :
              <AwesomeButton bubbles size="medium" type="primary" target="_blank"
                className="projItem"  href={p.websiteUrl}>{p.visitProject}</AwesomeButton>}
                <p id="projDescription" style={{color: p.projectSecondary}} className="projItem" >{p.projectDescription}</p>

            </div>
          </div>
          <div
            id="projImgContainer"
            className="cell grid-x large-7 align-middle align-center"
            style={{animation: `slideIn${right ? 'Right' : 'Left'} ease-out 1s`}}>
            {p.videoUrl ?
              <video playsInline autoPlay muted={true} loop id="vidPreview" >
                <source src={p.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video> :
              <img alt={`${p.projectHeader}img${i}`}
                style={{maxHeight: '790px', maxWidth: '790px'}}
                className="projImg cell" src={p.projectPreview} />}
            </div>

            {arrayConversion.slice(14, 22)
              .filter(description => description[1].length > 0)
              .map((descrip, index) =>
              <div key={`descrip${descrip[0]}`}>
                {descrip[1] || p.imageRows[index] ?
                  <ProjectListItem
                    rowHeader = {p.rowHeader[index]}
                    rowSubheader = {p.rowSubheader[index]}
                    rowDescription = {descrip[1]}
                    rowImage = {p.imageRows[index]}
                    rowAlternate = {index%2 === 0 ? 'even' : 'odd'}
                    rowNumber = {index}
                    contentAddition = {p.contentAddition ? p.contentAddition[index] : false}
                    rowIcon = {p.rowIcon}
                    numberOfRows = {p.rowHeader.length}
                  />
                  :
                  null}
                </div>

              )}
            </div>
          </div>

        )
      }
    }

    export default Projects
