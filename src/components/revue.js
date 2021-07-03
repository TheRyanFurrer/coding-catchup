import React from "react"

class Revue extends React.Component {
  render() {
        return (
          
          <div id="revue-embed">
            <form action="https://www.getrevue.co/profile/theryanfurrer/add_subscriber" method="post" id="revue-form" name="revue-form" target="_blank">
              <div className="revue-form-group">
                <p className="smaller-text">Interested in more articles from me? Subscribe below to get emailed every time I write.</p>
                <input className="revue-form-field" placeholder="email@email.com" type="email" name="member[email]" id="member_email" />
              </div>
              <div className="revue-form-actions">
                <input type="submit" defaultValue="Subscribe" name="member[subscribe]" id="member_submit" />
              </div>
              <div className="revue-form-footer">Powered by Revue. <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
            </form>
          </div>
        );
  };
}

export default Revue