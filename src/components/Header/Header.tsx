import * as React from "react";
import { connect } from "react-redux";
import { Istateimage } from "src/Store/ImageDragger/types";
import "./Header.css";

interface IHeaderProps {
  pagenumber?: number;
}

const Header: React.FunctionComponent<IHeaderProps> = props => {
  return (
    <React.Fragment>
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="#" />
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#">
              <h2>I̶̩̪̩͈̹͕̟̓̈̅̓̿̕͠m̶̢̛̎͒̐͑͋̌̄̚͝ḁ̷̑̋̇͂͂̎̈͝g̴̡̢̛͍̦͓̥̻͖̙̅͂͂̀̄͜ẻ̵̢͕͕̫̺̗̬͔̾̈́ ̸̖̰̳͉̞̟̣͈̆͗̓̌͘̚͜͝Ġ̶̙͔̮͈̽̿ȧ̵̛͉͕͎͇͕̮̈̉͆ľ̶̨͙̖̠̮̳͊͐̍͘l̴̠̜̟̩̥͙͉̎ͅe̸̛̛͈̮͇͙̫̯̰͚̅̉́̈̕͜ͅr̶̡̛̒̐͋y̴̫͔͛͊́̚</h2>
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#" />
            <a className="btn btn-sm btn-outline-secondary" href="#">
              {props.pagenumber}
            </a>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};
const mapStateToProps = ({ pagenumber }: Istateimage) => ({ pagenumber });

export default connect(
  mapStateToProps,
  null
)(Header);
