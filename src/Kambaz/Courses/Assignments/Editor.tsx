export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your web application running on netlify
        </textarea>
        <br />
        <table>
        <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
               </select> 
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
               </select> 
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
               </select> 
            </td> 
          </tr>
          <br />

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type"></label>
            </td>
            <td>
              Online Entry Options<br></br>
              <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-genre" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br></br>

                <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>

            </td> 
          </tr>
          <br />

          <tr>
          <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br />  
              <input id="wd-assign-to" value="Everyone" /><br /><br />
            </td>
            </tr>
            <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date"></label>
            </td>
            <td>
              <label htmlFor="wd-due-date">Due</label><br />
              <input id="wd-due-date"  type="date" value="2024-05-13" /><br /><br />
            </td>
            </tr>
            <tr>
            <td align="right" valign="top">
            </td> 
            <td>
              <label htmlFor="wd-available-from">Available From</label><br />
              <input id="wd-available-from"  type="date" value="2024-05-13" />
            </td>
            <td>
              <label htmlFor="wd-available-from">Until</label><br />
              <input id="wd-available-until"  type="date" value="2024-05-13" />
            </td>
          </tr>            
        </table>
        <hr></hr>
        <div>
            <button  style={{float: 'right', margin: 5}}>Save</button>
            <button  style={{float: 'right', margin: 5}}>Cancel</button>
        </div>
      </div>
  );}
  
  