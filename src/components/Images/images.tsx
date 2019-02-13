import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Actions from "src/Store/ImageDragger/Actions/index";

import { Iimage, Istateimage } from "src/Store/ImageDragger/types";

interface Iprops {
  fetchRequest: () => {};
  incrementPage: () => {};
}

class Images extends React.Component<Istateimage & Iprops, {}> {
  constructor(props: any) {
    super(props);
    this.props.fetchRequest();
  }
  public componentDidMount() {
    document.addEventListener("scroll", this.trackscroll);
  }
  public componentWillUnmount() {
    document.removeEventListener("scroll", this.trackscroll);
  }

  public trackscroll = () => {
    const wrappedElement = document.getElementById("div_image");
    if (this.isBottom(wrappedElement)) {
      this.props.incrementPage();
    }
  };
  public isBottom(el: any) {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      return true;
    } else {
      return false;
    }
  }

  public render() {
    const images = { ...this.props };
    return (
      <React.Fragment>
        <div className="container page-top" id="div_image">
          <div className="row">
            {images.images.length <= 0
              ? "noimages"
              : images.images.map((image: Iimage) => {
                  return (
                    <div
                      key={image.id}
                      className="col-lg-4 col-md-4 col-xs-6 img-rounded"
                    >
                      <a href="#" className="img-rounded" rel="ligthbox">
                        <img className="zoom img-fluid" src={image.urls.raw} />
                      </a>
                    </div>
                  );
                })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ images }: Istateimage) => ({ images });
const mapDisptchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(Actions.fetchimages()),
  incrementPage: () => dispatch(Actions.incrementPageNumber())
});
export default connect(
  mapStateToProps,
  mapDisptchToProps
)(Images);
