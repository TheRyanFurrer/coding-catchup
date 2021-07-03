import React from "react"

class Revue extends React.Component {
  render() {
        return (
          
          <div id="revue-embed" style={{"background": "#f2f2f2", "padding": "1rem"}}>
            <form action="https://www.getrevue.co/profile/theryanfurrer/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
              <div className="revue-form-group">
                <p style={{
                    "font-size": "smaller", 
                    "margin-bottom": "0"
                  }}>
                  Interested in more articles from me? 
                </p>
                <p style={{
                    "font-size": "smaller", 
                    "margin-bottom": ".5rem"
                  }}>Subscribe below to get emailed every time I write.</p>
                <input 
                  className="revue-form-field" 
                  placeholder="email@email.com" 
                  type="email" 
                  name="member[email]" 
                  id="member_email" 
                  style={{
                    "margin-bottom": ".5rem",
                    "font-size": "smaller",
                    "padding": ".5rem"
                  }}/>
              </div>
              <div className="revue-form-actions">
                <input 
                style={{
                  "font-size": "smaller",
                  "background": "#96e9d8",
                  "border": "none",
                  "padding": ".25rem .75rem",
                  "cursor": "pointer"
                }}
                type="submit" 
                defaultValue="Subscribe" 
                name="member[subscribe]" 
                id="member_submit" />
              </div>
              <div className="revue-form-footer" style={{"font-size": ".75rem"}}>Powered by Revue. <a target="_blank" href="https://www.getrevue.co/privacy" style={{"font-size": "smaller", "text-shadow": "none"}}>Privacy Policy</a>.</div>
            </form>
          </div>
        );
  };
}

export default Revue